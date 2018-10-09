import React from 'react';
import './PostContainerStyle/PostContainer.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail">
        <img
          src={props.thumbnailUrl}
          alt="post-header"
          className="post-thumb"
        />
      </div>
      <div className="username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
