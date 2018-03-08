import React from 'react';

const CommentSection = (props) => {
  return(
    <div>
      <div>{props.eachComment.username}</div>
      <div>{props.eachComment.text}</div>
    </div>
  );
};

export default CommentSection;