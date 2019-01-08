import React from 'react';
import './CommentSection.css'

const Comment = props => {
  return (
    <div className='comment'>
      <div className='username'>{props.comment.username}</div>
      <div>{props.comment.text}</div>
    </div>
  );
};

export default Comment;
