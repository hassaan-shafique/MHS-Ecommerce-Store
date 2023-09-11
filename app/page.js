"use client"
import React from 'react'
import Login from '@/app/Components/Login'
import Image from 'next/image'
import Home from './Components/Home'
import Navbar from '@/app/Components/Navbar'
import Pant from '@/app/Components/Pant'
import Shirt from './Components/Shirt'




const page = () => {
  return (
    <div>
      <Navbar/>
         {/* <Login/>   */}
       <Home/>
       <Pant/>
      <Shirt/>
     
    </div>
  )
}

export default page





