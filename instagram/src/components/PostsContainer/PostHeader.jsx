import React from "react";
import "./PostsContainer.css";

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
      <div className="usr">{props.username}</div>
    </div>
  );
};

export default PostHeader;
