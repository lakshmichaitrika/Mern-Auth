import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

export const signup=async (req,res,next)=>{
    console.log(req.body)
    const {username,password,email}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,password:hashedPassword,email})
    try{
        await newUser.save()


        res.status(201).json({message:"user Created successfully"})
    }
    catch(e){
        console.log(e)
       next(error)

    }
    
}

