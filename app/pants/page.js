"use client"
import React from 'react';
import PantsData from '../data/PantsData';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import FormalPantData from '../data/FormalPantData';
import Link from 'next/link';
const Pant = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-extrabold mt-4">Denim Pants</h1>
      <br />
      <ul className=" flex justify-center space-between h-[80%] w-[100%] space-x-[4%] ">
        {PantsData.map((pants) => (
          <li key={pants.id} className=" rounded overflow-hidden shadow-lg">
            <Image src="/pant3.jpg" alt="hoodies" height={400} width={400} />
            {pants.name}
            <br />
            Rs{pants.price}/-
            <div className="mt-1">
              <Link href="/product">
                <button className="bg-black  text-white font-semibold py-1 px-3 ml-[5%]">
                  Buy Now
                </button>
              </Link>
              <button className="bg-transparent border outline text-black font-semibold py-1 px-3 ml-[20%] mb-[6%]">
                Checkout
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-center font-extrabold mt-4">Formal Pants</h1>
      <br />
      <ul className=" flex justify-center space-between h-[80%] w-[100%] space-x-[4%] ">
        {FormalPantData.map((pants) => (
          <li key={pants.id} className=" rounded overflow-hidden shadow-lg">
            <Image src="/pant3.jpg" alt="pants" height={400} width={400} />
            {pants.name}
            <br />
            Rs{pants.price}/-
            <div className="mt-1">
              <Link href= "/product">
                <button className="bg-black text-white font-semibold py-1 px-3 ml-[5%]">
                  Buy Now
                </button>
              </Link>
              <button className="bg-transparent border outline  text-black font-semibold py-1 px-3 ml-[20%] mb-[6%]">
                Checkout
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pant;
