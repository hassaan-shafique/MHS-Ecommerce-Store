// pages/hoodies.js
import React from 'react';
import HoodiesData from '../data/HoodiesData';

const Hoodies = () => {
  return (
    <div>
      <h1>Hoodies</h1>
      <ul>
        {HoodiesData.map((hoodie) => (
          <li key={hoodie.id}>
            {hoodie.name} - ${hoodie.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hoodies;
