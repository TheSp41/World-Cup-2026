const loginRouter=require('./routes/loginRouter.js')
const connectDb=require('./config/mongoDb.js')
const express=require('express')
const cors=require('cors')
const resultRouter=require('./routes/resultRoute.js')
const cookieParser = require('cookie-parser')
const updateRouter=require('./routes/updateRouter.js')
const adminModel = require('./models/adminModel.js')
require('dotenv').config();

const app=express()
connectDb()

app.use(express.json())
const allowedOrigins=[process.env.local_server_url]
const corsOptions = {
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/auth',loginRouter)
app.use('/api/matchPrediction',resultRouter)
app.use('/api/update',updateRouter)
app.listen(process.env.SERVER_PORT)
