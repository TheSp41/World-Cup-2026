const result=require('../models/resultModel')
const fetchBracket=async (req,res)=>{
    try
    {const user=await result.findOne({ user: req.userId })
    if(!user) return res.status(404).json({success:false,msg:"no bracket found"})
    return res.status(200).json({success:true,bracket:user})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,msg:"Server error"})
    }
}
module.exports=fetchBracket