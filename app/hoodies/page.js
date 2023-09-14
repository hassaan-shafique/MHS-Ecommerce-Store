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
      <ul className=' flex justify-center space-between h-[80%] w-[100%] space-x-[2%] mt-[12%]'>
        {HoodiesData.map((hoodies) => (
          <li key={hoodies.id} className=' rounded overflow-hidden shadow-lg'>
           <Image 
               src="/Hoodie.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />
            {hoodies.name} - ${hoodies.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hoodie;
