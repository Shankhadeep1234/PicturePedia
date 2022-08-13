import React from "react";

import ImageCard from "./ImageCard";
import "../styles/ImageList.css";

const ImageList = ({ allImages }) => {
  const images = allImages.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className='image-list'>{images}</div>;
};

export default ImageList;
