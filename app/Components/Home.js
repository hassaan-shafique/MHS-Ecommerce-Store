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
        <button type='submit' className="w-[16%] mt-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Buy Now
        </button> 
      </div>
         <hr className="mt-[6%]"/>
         <br/>
      <div>
        <h1 style={{fontSize:'45px'}} className=' flex justify-center text-bold mb-6 text-xl'> TRENDING 
        </h1>
           <br/>
        <div className='flex justify-center space-between space-x-[3%]'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image 
               src="/Hoodie.jpg"
               alt='hoodies'
               height={400}
               width={400}
                 />

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Hoodies</div>
                       <button className='text-white bg-blue-600 rounded-full mr-2 py-2 px-3'>Buy Now</button>
                     </div>
               </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image 
               src="/Pant2.jpg"
               alt='hoodies'
               height={400}
               width={400}
                className='h-[61%]'
                 />

                <div class="px-6 py-3">
                    <div class="font-bold text-xl mb-2">Pants</div>
                        <button className='text-white bg-blue-600 rounded-full mr-2 py-2 px-3'>Buy Now</button>
                     </div>
               </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image 
               src="/shirts.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">shirts</div>
                         <button className='text-white bg-blue-600 rounded-full mr-2 py-2 px-3'>Buy Now</button>
                         
                     </div>
               </div>
           </div>
        <br/>
        <hr className="mt-[6%]"/>

      </div>
    </div>
  )
 
}

export default Home
