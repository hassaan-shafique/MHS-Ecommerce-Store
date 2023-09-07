import React from 'react'
import Image from 'next/image'


const Home = () => {
   
  return (
   
     
    <div>
     <Image
      className=" border-rounded ml-[70%] my-6 rounded-lg shadow-md my-7"
     src ="/image4.png" 
     width ={140}
     height ={140}
     alt ="front image"
     />
        <div className="flex flex-col mt-[-400px] ml-14 ">
        <p style={{ fontSize: '48px' }} className="text-xl font-semibold">FIND 
        YOUR <br/> <br/><br/> 
         TRUE  <br/> <br/> <br/>
         STYLE
          HERE</p>
<br/>
        <button type='submit' className="w-16 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
          Buy Now
        </button> 
      </div>
    </div>

    
  )
 
}

export default Home
