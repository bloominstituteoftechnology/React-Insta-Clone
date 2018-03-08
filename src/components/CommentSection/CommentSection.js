import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
  return(
    <div className='commentSection'>
      <div className='commentUserName'><b>{props.eachComment.username}</b></div>
      <div className='comments'>{props.eachComment.text}</div>
    </div>
  );
};

export default CommentSection;