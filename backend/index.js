import express from 'express'

import mongoose from 'mongoose'
import dotenv from "dotenv";



import userRoutes from './routes/user.route.js'
import userSignup from "./routes/auth.route.js"

import cors from 'cors'

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
console.log("connected to mongoDB")
})
.catch((err)=>{
    console.log(err)

})
const app=express()
app.use(express.json());
app.use(cors())
const port=3000
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})



app.use("/api/user",userRoutes)
app.use("/api/auth",userSignup)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal Error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})