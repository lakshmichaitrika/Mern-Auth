import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async (req,res)=>{
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
        res.status(404).json(e.message)

    }
    
}

