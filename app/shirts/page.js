
import React from 'react';
import ShirtsData from '../data/ShirtsData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import PoloData from '../data/PoloData';
import FormalData from '../data/FormalData';
import Footer from '../Components/Footer';

const Shirt = () => {
  
  return (
    
    <div>
   
    <Navbar/>
      <h1 className="text-center font-extrabold mt-10">T-Shirts</h1>
      <br/>
      <div  className="flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {ShirtsData.map((shirts) => (
          <div key={shirts.id} className=" text-center rounded overflow-hidden shadow-lg">
           <Image 
               src="/shirt1.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
         <div className="mt-3"> 
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
</div> 

<div className=" space-x-3 justify-center ml-[13%]">
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    S
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    M
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    L
  </button>
</div>             

           <div className="mt-1">
        <button className="bg-black hover:bg-blue-700 text-white font-semibold py-1 px-3 ml-[1%]">
          Buy Now
        </button>
        <button className="bg-transparent border-black border-2 text-black font-semibold py-1 px-3 ml-[20%] mb-[6%]">
          Checkout
        </button>
      </div>
            
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-center font-extrabold  mt-10"> Polo`s</h1>
        <br/>
       <div  className=" text-center flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {PoloData.map((shirts) => (
          <div key={shirts.id} className="rounded overflow-hidden shadow-lg">
           <Image 
               src="/polo2.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
            <div className='mt-3'>
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
             </div>
             <div className=" space-x-3 justify-center ml-[13%]">
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    S
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    M
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    L
  </button>
</div> 
             

             
           <div className="mt-1">
        <button className="bg-black hover:bg-blue-700 text-white font-semibold py-1 px-3 ml-[1%]">
          Buy Now
        </button>
        <button className="bg-transparent border-black border-2 text-black font-semibold py-1 px-3 ml-[20%] mb-[6%]">
          Checkout
        </button>
      </div>
            
          </div>
        ))}
      </div>

      </div>
      <div>
      <br/>
      
        <h1  className="text-center font-extrabold">
          Formal Shirts
        </h1>
        <br/>
         <div  className=" text-center flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {FormalData.map((shirts) => (
          <div key={shirts.id} className="rounded overflow-hidden shadow-lg">
           <Image 
               src="/formal1.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
            <div className="mt-3">
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
             </div>
             <div className=" space-x-3 justify-center ml-[13%]">
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    S
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    M
  </button>
  <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
    L
  </button>
</div> 

           <div className="mt-1">
        <button className="bg-black hover:bg-blue-700 text-white font-semibold py-1 px-3 ml-[1%]">
          Buy Now
        </button>
        <button className="bg-transparent border-black border-2 text-black font-semibold py-1 px-3 ml-[20%] mb-[6%]">
          Checkout
        </button>
      </div>
            
          </div>
        ))}
      </div>

      </div>
      <br/>

    <Footer/>
    </div>
  );
};

export default Shirt;
