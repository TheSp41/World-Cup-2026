const express=require('express')
const updateRouter=express.Router()
const updateHandler=require('../controllers/updateHandler')
const verifyToken=require('../middleware/verifyToken')
const verifyAdmin=require('../middleware/verifyAdmin')
updateRouter.get('/',verifyAdmin,updateHandler)
module.exports=updateRouter
