
import React from 'react';
import ShirtsData from '../data/ShirtsData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import PoloData from '../data/PoloData';
import FormalData from '../data/FormalData';

const Shirt = () => {
  
  return (
    
    <div>
   
    <Navbar/>
      <h1 className="text-center font-extrabold mt-10">T-Shirts</h1>
      <br/>
      <div  className="flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {ShirtsData.map((shirts) => (
          <div key={shirts.id} className="rounded overflow-hidden shadow-lg">
           <Image 
               src="/shirt1.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
            {shirts.name} <br/>
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
            
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-center font-extrabold  mt-10"> Polo`s</h1>
        <br/>
       <div  className="flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {PoloData.map((shirts) => (
          <div key={shirts.id} className="rounded overflow-hidden shadow-lg">
           <Image 
               src="/polo2.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
            {shirts.name} <br/>
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
            
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
         <div  className="flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {FormalData.map((shirts) => (
          <div key={shirts.id} className="rounded overflow-hidden shadow-lg">
           <Image 
               src="/formal1.jpg"
               alt="shirts"
             width={400}
             height={400}
                 />
            
            {shirts.name} <br/>
            {shirts.description}
            <br/>
             Rs{shirts.price}/-
            
          </div>
        ))}
      </div>

      </div>


    </div>
  );
};

export default Shirt;
