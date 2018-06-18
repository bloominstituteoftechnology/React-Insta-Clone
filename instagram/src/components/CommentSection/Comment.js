import React from "react";

const Comment = props => {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.username}</div>
    </div>
  );
};

export default Comment;
