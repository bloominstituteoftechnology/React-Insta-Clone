import React from "react";
import "./Comment.css";

export default ({ comment }) => {
  return (
    <div style={{ display: "flex", paddingBottom: "5px" }}>
      <strong>{comment.username}</strong> <span>{comment.text}</span>
    </div>
  );
};
