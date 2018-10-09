import React from "react";

const CommentSection = props =>
  props.comments.map((comment, index) => (
    <div key={index} className="comment">
      <span>{comment.username}</span>
      <p>{comment.text}</p>
    </div>
  ));

export default CommentSection;
