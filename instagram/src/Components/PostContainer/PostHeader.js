import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail">
        <img
          alt="post-header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className="username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
