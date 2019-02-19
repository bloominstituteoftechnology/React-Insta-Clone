import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div>
      <div className='comments'>
        <p className='username'>{props.comment.username}</p>
        <p className='comment'>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentSection;
