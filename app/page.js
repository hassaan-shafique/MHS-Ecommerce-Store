"use client"
import React from 'react'

import Image from 'next/image'
import Home from './home/page'
import Navbar from '@/app/Components/Navbar'





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





