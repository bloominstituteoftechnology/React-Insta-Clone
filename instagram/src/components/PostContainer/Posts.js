import React from "react";
import PostHeader from "./PostHeader";

import "./PostContainerStyle.css";

const Post = props => {
  return (
    <div className="postBorder">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />

      <div className="postImageContainer">
        <Img
          className="postImage"
          alt="TheThumbnail"
          src={props.post.imageUrl}
        />
      </div>
    </div>
  );
};

export default Post;
