import React from "react";

const Comment = props => {
  return (
    <div className="comment">
      <span className="comment-user">{props.comment.username}</span>
      {props.comment.text}
    </div>
  );
};

export default Comment;
