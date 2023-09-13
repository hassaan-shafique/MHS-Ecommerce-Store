"use client"
import React from 'react'
import Login from '@/app/login/page'
import Image from 'next/image'
import Home from './home/Home'
import Navbar from '@/app/Components/Navbar'
import Pant from './pants/page'
import Shirt from './shirts/page'
import Hoodie from './hoodies/page'




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





