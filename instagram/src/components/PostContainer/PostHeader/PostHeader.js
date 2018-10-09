import React from "react";

export default ({ thumbnailUrl, username }) => {
  return (
    <div className="post-header">
      <img src={thumbnailUrl} alt="User Thumbnail" />
      <strong>{username}</strong>
    </div>
  );
};