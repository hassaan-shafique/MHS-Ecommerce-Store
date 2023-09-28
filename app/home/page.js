import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className=" relative  aspect-w-16 aspect-h-9">
        <video
          className=" w-full h-full object-cover "
          autoPlay
          loop
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "35rem",
            left: 0,
            top: 0,
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className=" absolute top-0 left-0 right-0 p-4 text-white text-center bg-opacity-50 flex flex-col mt-[10%] ml-50 mr-[60%] ">
          <p style={{ fontSize: "52px" }} className="text-xl font-semibold">
            FIND YOUR <br /> <br />
            <br />
            <span className="text-red-700">TRUE </span> <br /> <br /> <br />
            STYLE HERE
          </p>
          <br />
          <Link href="/shirts">
            <button
              type="submit"
              className="w-[30%]  ml-[1%] mt-8 bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
            >
              Buy Now
            </button>
          </Link>
          
        </div>
      </div>
      {/* second part of the code  */}
      {/* in which we have shown the pictures with the links in them  */}
      
      <section class="text-gray-600 body-font">
        <div class="container px-6 py-[12%] mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Explore MHS Clothing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Discover MHS, where style meets comfort in every thread. Elevate
              your wardrobe with our timeless designs, crafted for the modern
              trendsetter. Embrace fashion that empowers your individuality,
              only with MHS.
            </p>
          </div>

          <div class="flex flex-wrap -m-8 ">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <Link href="/shirts">
                <div class="flex relative">
                  <Image
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/formal1.jpg"
                    width={200}
                    height={300}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      MHS Clothing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Formal Shirts
                    </h1>
                    <p className="leading-[550%]">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <Link href="/shirts">
                <div class="flex relative">
                  <Image
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/shirt1.jpg"
                    width={200}
                    height={300}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      MHS Clothing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      T-Shirts
                    </h1>
                    <p class="leading-[550%]">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <Link href="/hoodies">
                <div class="flex relative">
                  <Image
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/Hoodie.jpg"
                    width={200}
                    height={300}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      MHS Clothing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Hoodies
                    </h1>
                    <p class="leading-[550%]">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <Link href="/shirts">
                <div class="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute  w-full h-full object-cover object-center"
                    src="/formal4.jpg"
                    width={350}
                    height={300}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      MHS Clothing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      New Arrival
                    </h1>
                    <p class="leading-[550%]">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <Link href="/pants">
                <div class="flex relative">
                  <Image
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="/pant.jpg"
                    width={200}
                    height={350}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      MHS Clothing
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Holden Caulfield
                    </h1>
                    <p class="leading-[550%]">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/formal3.jpg"
                  width={200}
                  height={300}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    MHS Clothing
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-[550%]">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
