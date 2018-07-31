import React from "react";
import "./CommentSection.css";

const CommentSection = () => {
  return (
    <div className="comment-container">
      <div className="comment-icons"> </div>
      <div className="comment-list"> </div>
      <form>
        <input placeholder="Add a comment..." />
        <i className="fa fa-ellipsis-h" aria-hidden="true" />
      </form>
    </div>
  );
};

export default CommentSection;
