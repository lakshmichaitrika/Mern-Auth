import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignUp() {
 const [formData,setForm]=useState({})
 const [error,setError]=useState("") 
 const [loading,loadingState]=useState(false) 
 let navigate=useNavigate();

  const handleChange=(e)=>{
    setForm({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    loadingState(true)
    const res=await fetch("/api/auth/signup",
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
    if (data.success===false){
      console.log(data.message)
     setError(data.message)
     
     
    }
    else{
      navigate('/signin')  
    
    }
    
    
  }

  // console.log(formData)
  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center font-semibold my-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
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
         {loading?"Loading...":"Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account</p>
        <Link to="/signin">
        <span className="text-blue-500">Sign in</span>
      
        </Link>
       </div>
       <p className="text-red-400">{error.length>0 && error }</p>
    </div>
  );
}
