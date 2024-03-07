import {BrowserRouter,Routes,Route} from  "react-router-dom"
import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import SignIn from "./Pages/SignIn"
import SignOut from "./Pages/SignOut"
import Header from "./Components/Header"

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/signout" element={<SignOut/>} />
   </Routes>
   </BrowserRouter>
  )
}
