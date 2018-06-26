import React from "react";

const Comment = ({ username, text }) => {
  // Deconstructing
  return (
    <div>
      <span>{username}</span> {/* Passing in the username abd text prop  */}
      <span>{text}</span>
    </div>
  );
};

export default Comment;
