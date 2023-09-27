import Image from "next/image";
import React from "react";
import Link from "next/link";

const product = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                MHS Clothing
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Formal Shirt
              </h1>

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Color</span>
                <span class="ml-auto text-gray-900">white</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Size</span>
                <span class="ml-auto text-gray-900">Medium</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Quantity</span>
                <span class="ml-auto text-gray-900">1</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  2499/-
                </span>

                <Link href="/payment">
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy Now
                  </button>
                </Link>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
            <Image
              alt="image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/formal1.jpg"
              width={200}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default product;
