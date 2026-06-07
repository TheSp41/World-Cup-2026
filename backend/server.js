const loginRouter=require('./routes/loginRouter.js')
const connectDb=require('./config/mongoDb.js')
const express=require('express')
const cors=require('cors')
require('dotenv').config();

const app=express()
connectDb()

app.use(express.json())
const allowedOrigins=[process.env.local_server_url]
const corsOptions = {
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))


app.use('/api/login',loginRouter)
app.listen(process.env.SERVER_PORT)
