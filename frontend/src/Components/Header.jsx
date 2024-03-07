import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-gray-100 p-3 flex justify-between items-center'>
    <Link to="/">
    <h1 className='text-xl font-normal'>Auth App</h1>
    </Link>
   
     <ul className='flex justify-around'>
        <Link  to="/">
        <li className='mr-3'>Home</li>
        </Link>
        <Link to="/about">
        <li className='mr-3'>About</li>
        </Link>
       <Link to="/SignIn">
       <li className='mr-3'>SignIn</li>
       </Link>
        
     </ul>
    </div>
  )
}
