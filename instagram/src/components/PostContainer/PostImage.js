import React from 'react';
import './PostContainer.css';

const PostImage = (props) => {
  return(
    <img className="post__image" alt="My post" src={props.imageUrl} />
  );
};

export default PostImage;