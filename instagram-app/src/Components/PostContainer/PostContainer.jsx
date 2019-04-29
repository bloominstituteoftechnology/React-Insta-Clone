import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";
const PostContainer = props => {
  return (
    <div className="PostContainer">
      <div className="postwrapper">
        <img src={props.Data.thumbnailUrl} alt="users" />
        <div>{props.Data.username}</div>
        <img src={props.Data.imageUrl} alt="posted pic" />
        <div>{props.Data.timestamp}</div>
        <div>{props.Data.likes}</div>
        <CommentSection comments={props.Data.comments} />
        <input placeholder="Add a comment..." />
      </div>
    </div>
  );
};

export default PostContainer;
