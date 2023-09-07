import React from 'react'
import Image from 'next/image'


const Home = () => {
   
  return (
   
     
    <div>
     <Image
      className=" border-rounded ml-[60%] my-6 rounded-lg shadow-md my-7"
     src ="/image4.png" 
     width ={140}
     height ={140}
     alt ="front image"
     />
      <Image
      className=" border-rounded  mt-[-420px] ml-[75%] my-5 rounded-lg shadow-md my-8"
     src ="/image3.png" 
     width ={140}
     height ={140}
     alt ="front image"
     />

        <div className="flex flex-col mt-[-400px] ml-14 ">
        <p style={{ fontSize: '48px' }} className="text-xl font-semibold">FIND 
        YOUR <br/> <br/><br/> 
        <span className='text-red-700'>TRUE </span>  <br/> <br/> <br/>
         STYLE
          HERE</p>
<br/>
        <button type='submit' className="w-[16%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Buy Now
        </button> 
      </div>
    </div>


    
  )
 
}

export default Home
