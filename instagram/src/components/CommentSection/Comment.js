import React from "react";
import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="comment">
      <p className="user">{props.commentUser}</p>
      <p className="comment-text">{props.comment}</p>
    </div>
  );
};

export default Comment;
