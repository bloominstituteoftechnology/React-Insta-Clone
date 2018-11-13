import React from "react";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div className="comment-container">
      <span className="comm-user">{props.comm.username}</span>
      <span className="comm-text">{props.comm.text}</span>
    </div>
  );
};

export default CommentSection;
