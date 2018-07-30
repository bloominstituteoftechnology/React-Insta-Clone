import React from "react";
import "./CommentSection.css";

const CommentSection = () => {
  return (
    <div className="comment-container">
      <div className="comment-icons"> </div>
      <div className="comment-list"> </div>
      <form>
        <input placeholder="Add a comment..." />
      </form>
    </div>
  );
};

export default CommentSection;
