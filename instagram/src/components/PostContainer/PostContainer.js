import React from "react";
import CommentSection from "./../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.userData.thumbnailUrl} alt="" />
        <p>{props.userData.username}</p>
      </div>
      <CommentSection comments={props.userData.comments} />;
    </div>
  );
};

export default PostContainer;
