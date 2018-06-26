import React from "react";

const Comment = ({ username, text }) => {
  return (
    <div>
      <span>{username}</span>
      <span>{text}</span>
    </div>
  );
};

export default Comment;
