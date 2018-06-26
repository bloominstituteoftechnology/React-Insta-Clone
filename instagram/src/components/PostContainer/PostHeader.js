import React from "react";

const PostHeader = ({ thumbnailUrl, username }) => (
  <div className="container">
    <div className="row">
      <img src={thumbnailUrl} alt="" />
      <span>{username}</span>
    </div>
  </div>
);

export default PostHeader;
