
import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img className="post-thumb" src={props.thumbnailUrl} alt="post header"/>
        <p className="post-user">{props.username}</p>
      </div>
    </div>
  );
};

export default PostHeader;