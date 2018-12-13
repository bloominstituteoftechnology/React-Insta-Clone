import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className={props.className}>
      <img src={props.data.thumbnailUrl} alt="user" />
      <h2>{props.data.username}</h2>
    </div>
  );
};

export default PostHeader;
