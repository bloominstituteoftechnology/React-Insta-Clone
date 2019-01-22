import React from "react";
import "./Post.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-header-img">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
