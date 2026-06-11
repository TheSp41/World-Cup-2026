const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
user:{type:String,enum:['admin'],default:'admin',required:true},
group:{type:Map,of:[String]}, 
best8:{type:[String]},
knockouts:{type:Map,of:[String]},
ro32:{type:[{team1: { type: String, required: true },team2: { type: String, required: true }}]},
ro16:{type:[String]},
quarters:{type:[String]},
semis:{type:[String]},
final:{type:[String]},
winner:{type:[String]},
thirdFinish:{type:[String]},
score:{type:Number,default:0}
})
const adminModel=mongoose.models.admin || mongoose.model("admin",adminSchema)
module.exports=adminModel