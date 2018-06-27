import React from 'react';
import './Post.css';

const PostHeader = (props) => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img className="thumbnail-img" src={props.thumbnailUrl} alt="thumbnail" />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
