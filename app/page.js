"use client"
import React from 'react'
import Login from '@/Components/Login'
import Image from 'next/image'
import Home from '../Components/Home'
import Navbar from '@/Components/Navbar'


const page = () => {
  return (
    <div>
      <Navbar/>
         {/* <Login/>   */}
       <Home/>
    </div>
  )
}

export default page





