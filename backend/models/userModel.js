const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    pin:{type:String,required:true},
    verified:{type:Boolean,default:true},
    email:{type:String,required:false}
})
const userModel=mongoose.models.user || mongoose.model("user",userSchema)
module.exports=userModel