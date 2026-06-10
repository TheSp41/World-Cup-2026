const result=require('../models/resultModel')
const bracketHandler=async (req,res)=>{
    const {group,best8,knockouts,ro32,ro16,quarters,semis,final,winner,thirdFinish}=req.body;
    if(!group || !best8 || !knockouts || !ro32 || !ro16 || !quarters || !semis || !final || !winner || !thirdFinish){
        return res.status(400).json({success:false,msg:"Invalid data"})
    }
    try{
    const userId=req.userId;
    const userExists=await result.findOneAndDelete({ user: userId })
    const newResult=await result.create({user:userId,group,best8,knockouts,ro32,ro16,quarters,semis,final,winner,thirdFinish})
    res.status(201).json({success:true,msg:"Entry added"})}
    catch(err){
        console.log(err)
        res.status(500).json({success:false,msg:"Server error"})
    }
} 
module.exports=bracketHandler