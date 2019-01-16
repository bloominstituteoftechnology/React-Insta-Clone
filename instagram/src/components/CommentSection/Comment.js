import React from "react";

const Comment = props => {
  return (
    <div className="comment-item-wrapper">
      <p>
        <span className="comment-username">@{props.username}</span>{" "}
        <span className="comment-text">{props.text}</span>
      </p>
    </div>
  );
};

export default Comment;
