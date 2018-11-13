import React from "react";
import "./PostContainer";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="thumbnail-container">
        <img
          src={props.info.thumbnailUrl}
          alt="profile thumbnail"
          className="header-thumbnail"
        />
      </div>
      <h2 className="bold">{props.info.username}</h2>
    </div>
  );
};

export default PostHeader;
