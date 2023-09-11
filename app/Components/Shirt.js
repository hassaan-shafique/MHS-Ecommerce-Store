// pages/shirts.js
import React from 'react';
import ShirtsData from './ShirtsData';
import Image from 'next/image';
const Shirt = () => {
  return (
    <div>
      <h1 className="text-center">Shirts</h1>
      <br/>
      <ul  className='flex text.center space-x-4 '>
        {ShirtsData.map((Shirt) => (
          <li key={Shirt.id}>
            {Shirt.name} - ${Shirt.price}
             <Image 
               src="/shirts.jpg"
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

export default Shirt;
