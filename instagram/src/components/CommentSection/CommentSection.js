import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
  return (
    <div className='comment'>
      <div>{props.data.username}</div>
      <div>{props.data.text}</div>
    </div>
  );
};

export default CommentSection;
