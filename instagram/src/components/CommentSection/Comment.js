import React from "react";

const Comment = props => {
  return (
    <div>
      <p>User: {props.comment.username}</p>
      <p>Text: {props.comment.username}</p>
    </div>
  );
};

export default Comment;
