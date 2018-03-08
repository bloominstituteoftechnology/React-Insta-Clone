import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
  return(
    <div class='commentSection'>
      <div class='commentUserName'><b>{props.eachComment.username}</b></div>
      <div class='comments'>{props.eachComment.text}</div>
    </div>
  );
};

export default CommentSection;