import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-gray-100'>
    <div className='p-3 flex justify-between items-center max-w-6xl mx-auto'>
    <Link to="/">
    <h1 className='text-xl font-normal'>Auth App</h1>
    </Link>
   
     <ul className='flex justify-around gap-4'>
        <Link  to="/">
        <li>Home</li>
        </Link>
        <Link to="/about">
        <li >About</li>
        </Link>
       <Link to="/signin">
       <li>SignIn</li>
       </Link>
        
     </ul>

    </div>
  
    </div>
  )
}
