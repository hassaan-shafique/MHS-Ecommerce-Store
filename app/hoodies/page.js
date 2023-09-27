"use client"
import React from 'react';
import HoodiesData from '../data/HoodiesData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link';

const Hoodie = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-extra-bold mt-2">Hoodies</h1>
      <br />
      <ul className=" flex justify-center space-between h-[80%] w-[100%] space-x-[2%] ">
        {HoodiesData.map((hoodies) => (
          <li key={hoodies.id} className=" rounded overflow-hidden shadow-lg">
            <Image src="/Hoodie.jpg" alt="hoodies" height={400} width={400} />
            <div className="text-center mt-1">
              {hoodies.name}
              <br /> Rs {hoodies.price}/-
            </div>
            <div className=" space-x-3 justify-center ml-[31%]">
              <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
                S
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
                M
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded">
                L
              </button>
            </div>

            <div className="mt-1">
              <Link href= "/product">
                <button className="bg-black hover:bg-grey-700  text-white font-semibold py-1 px-3 ml-[5%]">
                  Buy Now
                </button>
              </Link>
              <button className="bg-transparent hover:bg-black-700 border outline text-black font-semibold py-1 px-3 ml-[39%] mb-[6%]">
                Checkout
              </button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <Footer />
    </div>
  );
};

export default Hoodie;
