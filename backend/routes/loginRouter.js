const loginController=require('../controllers/userController.js')
const express=require('express')
const loginRouter=express.Router()
loginRouter.post('/',loginController)
module.exports=loginRouter