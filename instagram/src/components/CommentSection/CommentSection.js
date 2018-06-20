import React from "react";

const CommentSection = props => {
  return (
    <div className="comment-text">
      <p className="comment">{props.comments.map((instance, i) => <li key={i}>{instance.text}</li>)}</p>
    </div>
  );
};



export default CommentSection;
