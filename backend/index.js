import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import userSignup from "./routes/auth.route.js"
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
const port=3000
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})

app.use("/api/user",userRoutes)
console.log(userSignup)
app.use("/api/signup",userSignup)