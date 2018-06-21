import React from "react";

const Comment = props => {
  return (
    <div>
      <p className="comment-container">
        <span className="commenter-name">{props.comment.username}</span>
        {props.comment.text}
      </p>
    </div>
  );
};


export default Comment;