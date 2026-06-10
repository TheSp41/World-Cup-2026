const bcrypt=require('bcrypt')
const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const loginUser=async (req,res)=>{
    const {email,password}=req.body
    try{
        const userExists=await User.findOne({email})
        if(!userExists){
            return res.status(401).json({success:false,msg:"Incorrect login details"})
        }
        const isMatch=await bcrypt.compare(password,userExists.password)
        if(isMatch){
            const accessToken=jwt.sign(
                {id:userExists._id},
                process.env.JWT_SECRET,
                {expiresIn:'15m'}
            )
            const refreshToken = jwt.sign(
                { id: userExists._id }, 
                process.env.REFRESH_TOKEN_SECRET, 
                { expiresIn: '7d' }
            )
            const saltInt=parseInt(process.env.SALT)
            const salt=await bcrypt.genSalt(saltInt)
            const hashedRefreshToken=await bcrypt.hash(refreshToken,salt)
            userExists.refreshToken=hashedRefreshToken
            await userExists.save()

            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                //secure: process.env.NODE_ENV !== 'development', 
                secure:false,
                sameSite: 'strict', 
                maxAge: 7*24*60*60*1000,
                path:'/'
            })
        res.status(200).json({ msg:"Login successful",accessToken, userId: userExists._id, username: userExists.username });
        }
        else return res.status(401).json({success:false,msg:"Incorrect login details"})
    }
    catch(err){
        console.error("Login error:", err)
        res.status(500).json({success:false,msg:"Server error"})
    }
}
module.exports=loginUser