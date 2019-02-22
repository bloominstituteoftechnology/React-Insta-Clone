import React from "react";

const Comment = props => {
  return (
    <div className="comment-container">
      <p>
        <span>{props.comments.username}</span> {props.comments.text}
      </p>
    </div>
  );
};

export default Comment;
