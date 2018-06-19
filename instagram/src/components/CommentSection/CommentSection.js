import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.post.comments.map(comment => (
        <Comment comment={comment} key={Math.random()} />
      ))}
    </div>
  );
};

export default CommentSection;
