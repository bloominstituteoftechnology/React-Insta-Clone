import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail-wrapper">
        <img
          alt="post header"
          className="post-thumbnail"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;