import React from 'react';

const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={imageSrc} alt={altText} className="w-full h-40 object-cover" />
    </div>
  );
};

export default ImageCard;