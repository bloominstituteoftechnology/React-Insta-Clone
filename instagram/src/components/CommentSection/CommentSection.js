import React from "react";

const CommentSection = props => {
  return (
    <div>
      {/* COMMENTS SECTION */}
      <div>{props.text}</div>
      <div>{props.username}</div>
    </div>
  );
};

export default CommentSection;
