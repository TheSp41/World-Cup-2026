const bcrypt=require('bcrypt')
const validator=require('validator')
const User=require('../models/userModel')
const registerUser=async (req,res)=>{
    const {email,password,username}=req.body
    
    try
    {
        if(!validator.isEmail(email)){
	return res.json({success:false,msg:"enter valid email"})
    }
    if (!validator.isStrongPassword(password)) {
    return res.json({ success: false, msg: "Password must be at least 8 chars, including 1 uppercase, 1 number, 1 special char" });
    }
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(409).json({success:false,msg:"Email already exists"})
        }
        
        const saltInt=parseInt(process.env.SALT)
        const salt=await bcrypt.genSalt(saltInt)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=await User.create({username,email:email,password:hashedPassword})
        res.status(201).json({success:true,msg:"User registered sucessfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({ success: false, msg: "Server error" })
    }
}
module.exports=registerUser