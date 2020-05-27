import React from 'react';
import './imagepost.css';

const ImagePost = props => {
  return (
    <div className='image-post'>
      <img src={props.img} className='post-img' />
    </div>
  );
};

export default ImagePost;
