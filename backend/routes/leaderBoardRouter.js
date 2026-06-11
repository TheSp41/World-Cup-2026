const leaderboardHandler=require('../controllers/leaderboardHandler')
const express=require('express')
const leaderboardRouter=express.Router()
leaderboardRouter.get('/',leaderboardHandler)
module.exports=leaderboardRouter