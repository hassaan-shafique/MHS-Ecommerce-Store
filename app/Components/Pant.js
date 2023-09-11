// pages/pants.js
import React from 'react';
import PantsData from './PantsData';
import Image from 'next/image';
const Pant = () => {
  return (
    <div>
      <h1 className='text-center'>Pants</h1>
      <br/>
      <ul className='flex text.center space-x-4 '>
        {PantsData.map((pants) => (
          <li key={pants.id}>
          
            {pants.name} 
            {pants.description}
            - ${pants.price}
            <Image 
               src="/pant3.jpg"
               alt='hoodies'
               height={400}
               width={400}
              
                 />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pant;
