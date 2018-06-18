import React from 'react';
import './PostContainer.css';

const PostHeaderUsername = (props) => {
  return(
    <span className="post-header__username">{props.username}</span>
  );
};

export default PostHeaderUsername;