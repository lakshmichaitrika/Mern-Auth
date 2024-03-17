import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function SignIn() {
 const [formData,setForm]=useState({})
// const [error,setError]=useState("") 
 const [loading,loadingState]=useState(false) 
const navigate=useNavigate();
  const handleChange=(e)=>{
    setForm({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    loadingState(true)
    const res=await fetch("/api/auth/signin",
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
      
    }
    )
    loadingState(false)
    const data=await res.json();
    console.log(res)
    
    navigate('/')
  }

  
  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center font-semibold my-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button type="submit" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
         {loading?"Loading...":"Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Create an account</p>
        <Link to="/signup">
        <span className="text-blue-500">Sign Up</span>
      
        </Link>
       </div>
    </div>
  );
}
