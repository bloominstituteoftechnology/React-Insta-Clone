import React from "react";
import "./CommentSection.css";

const CommentSection = (props) => {
  return (
    <div>
      <p className='comments'><span>{props.comments.username}</span> {props.comments.text}</p>
    </div>
  );
};

export default CommentSection;
