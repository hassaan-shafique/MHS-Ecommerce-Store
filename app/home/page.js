import React from 'react'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import Link from 'next/link'



const Home = () => {
   
  return (
   
     
    <div>
    
    <div className=" relative  aspect-w-16 aspect-h-9">
    
          <video
            className=" w-full h-full object-cover "
            autoPlay
            loop 
            muted
            style={{
        position: "relative",
        width: "100%",
        height: "35rem",
        left: 0,
        top: 0,
        }} 
          >
            <source src="/video.mp4" type="video/mp4" />
           
          </video>
            <div className=" absolute top-0 left-0 right-0 p-4 text-white text-center bg-opacity-50 flex flex-col mt-[10%] ml-50 mr-[60%] ">
        <p style={{ fontSize: '52px' }} className="text-xl font-semibold">FIND 
        YOUR <br/> <br/><br/> 
        <span className='text-red-700'>TRUE </span>  <br/> <br/> <br/>
         STYLE
          HERE</p>
             <br/>
        <button type='submit' className="w-[30%]  ml-[30%] mt-8 bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ">
          Buy Now
        </button> 
      </div>

        </div>
   
     {/* <Image
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
     /> */}

        {/* <div className=" absolute top-0 left-0 right-0 p-4 text-white text-center bg-black bg-opacity-50 flex flex-col mt-[-1px] ml-14 ">
        <p style={{ fontSize: '48px' }} className="text-xl font-semibold">FIND 
        YOUR <br/> <br/><br/> 
        <span className='text-red-700'>TRUE </span>  <br/> <br/> <br/>
         STYLE
          HERE</p>
             <br/>
        <button type='submit' className="w-[16%] mt-14 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
          Buy Now
        </button> 
      </div> */}

         <hr className="mt-[6%]"/>
         <br/>
      <div>
        <h1 style={{fontSize:'45px'}} className=' flex justify-center text-bold mb-6 text-xl'> Explore MHS Clothing
        </h1>
           <br/>
 
        <div className='flex justify-center space-between space-x-[10%]'>
        <Link href="/hoodies">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
           
              <Image 
               src="/Hoodie.jpg"
               alt='hoodies'
               height={500}
               width={500}
                 />

                <div className="px-2 py-2">
                   
                       <button className='text-black bg-transparent border outline mr-2 py-1 px-1'>Hoodies</button>
                     </div>
               </div>
           </Link>

<Link href="/hoodies">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Link href="/pants">
              <Image 
               src="/Pant2.jpg"
               alt='pants'
               height={500}
               width={500}
                className='h-[61%]'
                 />
                 </Link>

                <div className="px-2 py-2">
                    
                        <button className='text-black bg-transparent border outline  mr-2 py-1 px-1'>Pants</button>
                     </div>
               </div>
</Link>

      <Link href="/shirts">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Image 
               src="/shirts.jpg"
               alt='shirts'
               height={500}
               width={500}
              
                 />

                <div className="px-2 py-2">
                   
                         <button className='text-black bg-transparent text-center border outline'>Shirts</button>
                         
                     </div>
               </div>
               </Link>

           </div>

        <br/>
        <hr className="mt-[6%]"/>

      </div>
      
    </div>
  )
 
}

export default Home
