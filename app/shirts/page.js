
import React from 'react';
import ShirtsData from '../data/ShirtsData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

const Shirt = () => {
  
  return (
    
    <div>
   
    <Navbar/>
      <h1 className="text-center">Shirts</h1>
      <br/>
      <ul  className=' flex justify-center space-between h-[80%] w-[100%] space-x-[4%] '>
        {ShirtsData.map((shirt) => (
          <li key={shirt.id} className=' rounded overflow-hidden shadow-lg'>
           <Image 
               src= "/shirts2.jpg" 

               alt={shirt.name}
               height={850}
               width={850}
                 />
            
            {shirt.name} <br/>
            {shirt.description}
            <br/>
             Rs{shirt.price}/-
            
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Shirt;
