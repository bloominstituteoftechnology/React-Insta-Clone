import React from 'react';
import ImageThumbnail from './ImageThumbnail';

const ImageContainer = props => {
  return (
    <div>
      <ImageThumbnail src='instagram-logo.png'/>
      <ImageThumbnail src='./Img/Instagram_name.svg'/>
    </div>
  );
};

export default ImageContainer;
