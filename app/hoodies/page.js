"use client"
import React from 'react';
import HoodiesData from '../data/HoodiesData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

const Hoodie = () => {
  return (
    <div>
    <Navbar/>
      <h1 className='text-center'>Hoodies</h1>
      <br/>
      <ul className=' flex justify-center space-between h-[80%] w-[100%] space-x-[2%] '>
        {HoodiesData.map((hoodies) => (
          <li key={hoodies.id} className=' rounded overflow-hidden shadow-lg'>
           <Image 
               src="/Hoodie.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />
            {hoodies.name} 
            <br/> Rs {hoodies.price}/-

             
           <div className="mt-1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 ml-[5%]">
          Buy Now
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-3 ml-[25%] mb-[6%]">
          Checkout
        </button>
      </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hoodie;
