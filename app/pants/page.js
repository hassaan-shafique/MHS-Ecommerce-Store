"use client"
import React from 'react';
import PantsData from '../data/PantsData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
const Pant = () => {
  return (
    <div>
    <Navbar/>
      <h1 className='text-center'>Pants</h1>
      <br/>
      <ul className='flex text.center space-x-4 '>
        {PantsData.map((pants) => (
          <li key={pants.id}>
         <Image 
               src="/pant3.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />
            {pants.name} 
            
            - ${pants.price}
           

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pant;
