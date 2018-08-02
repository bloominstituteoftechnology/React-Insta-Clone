import React from "react";
import "./Comment.css";

const Comment = prop => {
  return (
    <div>
      <div className="comment-name"> {prop.eye.username}</div>
      <div className="comment-text">{prop.eye.text} </div>
    </div>
  );
};

export default Comment;
