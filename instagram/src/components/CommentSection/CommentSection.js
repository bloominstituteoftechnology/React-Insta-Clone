import React from "react";

const CommentSection = (props) => {
  const {username,text} = props.comment;
  return (
    <span>
      <span className="user">{username}</span>
      <span className="text">{text}</span>
      <br/>
    </span>
  );
};


export default CommentSection;
