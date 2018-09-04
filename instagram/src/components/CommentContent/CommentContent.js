import React from "react";

const CommentContent = props => {
  return (
    <p className="comment">
      <strong>{props.username}</strong> {props.text}
    </p>
  );
};

export default CommentContent;
