import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div>
      <img src={props.thumbnailUrl} alt="" className="post-thumb" />
      <p>{props.username}</p>
    </div>
  );
};

export default PostHeader;
