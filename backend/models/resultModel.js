const mongoose=require('mongoose')
const resultSchema=new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
group:{type:[String],required:true}, //all 48 teams in order of group 
best8:{type:[String],required:true},
roundOf32:{type:[String],required:true},
roundOf16:{type:[String],required:true},
quarters:{type:[String],required:true},
semis:{type:[String],required:true},
final:{type:[String],required:true},
winner:{type:String,required:true},
thirdFinish:{type:String,required:true}
})
const resultModel=mongoose.models.result || mongoose.model("result",resultSchema)