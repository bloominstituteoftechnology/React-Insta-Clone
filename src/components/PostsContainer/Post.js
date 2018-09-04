import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
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
      <div class="feedback-buttons">
        <img src="https://png.icons8.com/metro/1600/like.png" />
        <img src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-69-512.png" />
      </div>
      <p class="likes">{props.post.likes}</p>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
