import React from "react";
import HoodiesData from "./HoodiesData";
import Image from "next/image";
import ImageCard from "./ImageCard";



const Hoodies = () => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {HoodiesData.map((hoodie) => (
        <ImageCard
          key={hoodie.id}
          imageSrc={hoodie.image}
          altText={hoodie.name}
/>
      ))}
   
      
    </div>
  )
}

export default Hoodies
