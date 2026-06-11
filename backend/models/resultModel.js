const mongoose=require('mongoose')
const resultSchema=new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
group:{type:Map,of:[String],required:true}, 
best8:{type:[String],required:true},
knockouts:{type:Map,of:[String],required:true},
ro32:{type:[{team1: { type: String, required: true },team2: { type: String, required: true }}],required:true},
ro16:{type:[String],required:true},
quarters:{type:[String],required:true},
semis:{type:[String],required:true},
final:{type:[String],required:true},
winner:{type:[String],required:true},
thirdFinish:{type:[String],required:true},
score:{type:Number,default:0}
})   
const resultModel=mongoose.models.result || mongoose.model("result",resultSchema)
module.exports=resultModel