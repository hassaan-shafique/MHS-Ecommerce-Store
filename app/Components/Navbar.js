"use client"
import Link from 'next/link';
import Image from 'next/image';
import Login from "../login/page"
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between ">
        
          {/* mhs clothing div */}
         <div className="text-white text-xl font-semibold flex-grow text-start">
           <h1 className='text-left'> <span className= " text-red-900 italic ">MHS</span> Clothing</h1>
           </div>

            {/* Right Section - Navigation Links */}
            <div className="flex text-center  mt-2 mr-14 space-x-10"  >
             <Link href="/" passHref className="text-white flex text-center" >
             Home
          </Link>
          <Link href="/shirts" passHref className="text-white flex text-center">
            T-shirts 
          </Link>
          <Link href="/hoodies" passHref className="text-white text center">
          Hoodies
          </Link>
          <Link href="/pants" passHref className="text-white text-center ">
           Pants
          </Link>
              </div>

            

        <div className="mr-6"> 
        <button  
        // onClick= {toggleLogin}
         className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
        <Link href="/login" passHref className="text-white space-x-10">
          
             Login
          </Link>
          </button>
          {showLogin && <Login />}
          </div>
        
   <div className="flex items-center space-x-5 ml-4">
  <Link href="/" passHref className="text-white">
    <div className="relative ">
      <Image
        src="/shopping-cart.svg"
        alt="Shopping Cart"
        width={37}
        height={37}
// fill="white"
      />
      {/* You can add a badge or count for the cart items here */}
     
    </div>
  </Link>
</div>



      </div>
        {/* <Login/> */}
    </nav>
  );
};

export default Navbar;
