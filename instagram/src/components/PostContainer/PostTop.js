import React from 'react';
import './PostContainer.css';

const PostTop = props => {
  return (
    <div className="row">
      <div className="posttop">
        <img
          alt="postimgthumbnail"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostTop;
