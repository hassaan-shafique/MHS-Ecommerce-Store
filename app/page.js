"use client"
import React from 'react'

import Image from 'next/image'
import Home from './home/page'
import Navbar from '@/app/Components/Navbar'
import Footer from './Components/Footer'





const page = () => {
  return (
    <div>
      <Navbar/>
         {/* <Login/>   */}
       <Home/>
      <Footer/>
      
    </div>
  )
}

export default page





