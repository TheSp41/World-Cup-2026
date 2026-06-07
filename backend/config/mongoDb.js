const mongoose=require('mongoose')
const connectDb=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connected")
    })
    await(mongoose.connect(`${process.env.MONGODB_URL}/${process.env.PROJECT_NAME}`))
}
module.exports=connectDb