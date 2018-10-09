import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div className="comment">
            <strong>{comment.username}</strong> {comment.text}
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
