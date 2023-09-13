// pages/shirts.js
import React from 'react';
import ShirtsData from '../data/ShirtsData';
import Image from 'next/image';
const Shirt = () => {
  return (
    <div>
      <h1 className="text-center">Shirts</h1>
      <br/>
      <ul  className='flex text.center space-x-4 '>
        {ShirtsData.map((Shirt) => (
          <li key={Shirt.id}>
           <Image 
               src="/shirts.jpg"
               alt='shirts'
               height={400}
               width={400}
              
                 />
            {Shirt.name} - ${Shirt.price}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shirt;
