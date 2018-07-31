import React from 'react';
import './PostContainer.css';

const PostTop = props => {
  return (
    <div className="posttop row ">
      <div>
        <img
          alt="postimgthumbnail"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className = "username">{props.username.charAt(0).toUpperCase() + props.username.substr(1)}</div>
    </div>
  );
};

export default PostTop;
