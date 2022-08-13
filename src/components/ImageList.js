import React from "react";

import "../styles/ImageList.css";

const ImageList = ({ allImages }) => {
  const images = allImages.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
