import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
console.log("connected to mongoDB")
})
.catch((err)=>{
    console.log(err)

})
const app=express()
const port=8080
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})