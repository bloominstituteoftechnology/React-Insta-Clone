import React from "react";
import "./CommentSection.css";

const Comment = ({ username, text }) => {
  // Deconstructing
  return (
    <div className="comments-wrapper">
      <span className="username">{username}</span>{" "}
      {/* Passing in the username abd text prop  */}
      <span className="comments-text">{text}</span>
    </div>
  );
};

export default Comment;
