import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = (props) => {
  return(
    <ul className="post-container">
      <Post />
    </ul>
  );
};

export default PostContainer;