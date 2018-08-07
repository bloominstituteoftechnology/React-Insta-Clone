import React from "react";
import CommentSection from "./CommentSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="likes">
          <i class="far fa-heart"></i>
          <strong>{props.post.likes}{`likes`}</strong>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;