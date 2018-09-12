import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSectionContainer";

const Post = props => {
  return (
    <div className="post-content">
      <div className="post-header">
        <PostHeader
          thumbnailUrl={props.post.thumbnailUrl}
          username={props.post.username}
        />
      </div>
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
