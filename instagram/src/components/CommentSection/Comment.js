import React from "react";

const Comment = props => {
  return (
    <div>
      <p className="comment">
        <span className="comment-user">{props.comment.username}</span>
        {props.comment.text}
      </p>
    </div>
  );
};

export default Comment;
