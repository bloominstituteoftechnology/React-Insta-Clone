import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
  return (
    <div className='comment'>
      <div className='username'>{props.data.username}</div>
      <div>{props.data.text}</div>
    </div>
  );
};

export default CommentSection;
