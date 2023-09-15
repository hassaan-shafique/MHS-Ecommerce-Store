"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-white">
        <div className="flex justify-between">
          <div className="ml-[2%]">
            <h1 className=" ml-[10%] text-2xl font-semibold">
              <span className="text-red-800">MHS</span> Clothing
            </h1>
            <br/>
            <p className="text-base text-2xl"> At MHS Clothing, we endeavor to<br/> 
            produce the finest menswear,
            
            with <br/> timeless style and no  compromise <br/>on quality. Constructed from
            
            the <br/>finest fabric, immaculately cut and <br/>finished, our shirts are
           
            so crisp and <br/>comfortable that you will forget you <br/> are wearing a
            shirt.
            <br/>
<br/>
The website mhsclothing.com is owned <br/>and operated by MHS Clothing
              located <br/>at Islamabad.
            </p>
          
          </div>
          <div  className=" rounded-full mr-[10%]">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="query" className="block text-gray-400 mb-1">
                  Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
        <div className="text-center mt-8">
          &copy; 2023 MHS Clothing
        </div>
      </div>
    </footer>
  );
};

export default Footer;
