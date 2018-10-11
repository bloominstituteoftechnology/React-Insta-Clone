import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div>
      <div>
        <img src={props.thumbnailUrl} alt="no" />
      </div>
      <div>
        <h3>{props.username}</h3>
      </div>
      
    </div>
  )
};

export default PostHeader;