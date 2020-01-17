import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
};

export default PostHeader;
