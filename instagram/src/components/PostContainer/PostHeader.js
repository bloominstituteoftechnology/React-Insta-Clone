import React from "react";

const PostHeader = props => {
  return (
    <div className="container">
      <div className="row">
        <img src={props.thumbnailURL} alt="" />
        <span>{props.username}</span>
      </div>
    </div>
  );
};

export default PostHeader;
