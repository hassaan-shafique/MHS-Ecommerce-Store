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
      <ul className='flex text.center space-x-9'>
        {HoodiesData.map((Hoodie) => (
          <li key={Hoodie.id}>
           <Image 
               src="/Hoodie.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />

            {Hoodie.name} - ${Hoodie.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hoodie;
