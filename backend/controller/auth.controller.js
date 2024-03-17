import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt  from "jsonwebtoken"
import { errorHandler } from "../utils/error.js"

export const signup=async (req,res,next)=>{
    console.log(req.body)
    const {username,password,email}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,password:hashedPassword,email})
    try{
        await newUser.save()


        res.status(201).json({message:"User Created successfully"})
    }
    catch(e){
        console.log(e)
       next(errorHandler(404,"you are already signup"))

    }
    
}

export const signin=async (req,res,next)=>{
    console.log(req.body)
    const {password,email}=req.body
     try{
        const validUser=await User.findOne({email})
       
        if (!validUser) return next(errorHandler(401,"user not found"))
        const validPassword=bcryptjs.compareSync(password,validUser.password)
        if (!validPassword) return next(errorHandler(401,"invalid login"))
        const token=jwt.sign({id:validUser._id},process.env.JWT_TOKEN)

        const {password:hashedPassword,...rest}=validUser._doc
        console.log(hashedPassword)
        res
        .cookie('token',token,{httpOnly:true,expires:new Date(Date.now()+3600000)})
        .status(200)
        .json(rest)
          }
        
    catch(e){
        console.log(e)
       next(e)

    }
    
}

