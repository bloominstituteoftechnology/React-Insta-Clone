import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";

import "./PostContainerStyle.css";

const Post = props => {
  return (
    <div className="postBorder">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />

      <div className="postImageContainer">
        <img
          className="postImage"
          alt="TheThumbnail"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
