import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    // Create a functional component 'header' with a thumbnail and username from each post in data. 
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
