import React from "react";

const PostHeader = ({ thumbnailUrl, username }) => (
  <div className="container">
    <div className="row">
      <img src={thumbnailUrl} alt="" className="thumbnail" />
      <span className="username">{username}</span>
    </div>
  </div>
);

export default PostHeader;
