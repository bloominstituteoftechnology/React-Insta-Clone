import React, { Component } from "react";
import "./CommentSection.css";

const CommentsContainer = props => {
  return (
    <div className="comment-container">
      <p className="comments-username">{props.comments.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
};

export default CommentsContainer;
