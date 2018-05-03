//CommentSection.js

import React from "react";

const CommentSection = (props) => {
  const {username,text} = props.chat;
  return (
    <div>
      {username}
      {text}
    </div>
  );
};


export default CommentSection;
