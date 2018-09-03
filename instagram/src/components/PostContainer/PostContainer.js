import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <div className="post-header">
        <img src={props.post.thumbnailUrl} alt="" />
        <h3>{props.post.username}</h3>
      </div>
      <div className="Comment-section">
        <img src={props.post.imageUrl} alt="" />
        <CommentSection comments={props.post.comments} />
      </div>
    </div>
  );
};

export default PostContainer;
