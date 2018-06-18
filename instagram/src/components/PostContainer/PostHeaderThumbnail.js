import React from 'react';
import './PostContainer.css';

const PostHeaderThumbnail = (props) => {
  console.log(props);
  return(
    <img className="post-header__thumbnail" src={props.thumbnail} alt="My thumbnail" />
  );
};

export default PostHeaderThumbnail;