import React from 'react';
import Comment from './Comment';

import './Comment.css';

function CommentList(props) {
  return (
    <div className='comment-section'>
      {props.comments.map((comment) => (
        <Comment profileObject={comment} key={comment.text} />
      ))}     
    </div>
  );
}

export default CommentList;