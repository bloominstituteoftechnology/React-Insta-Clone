import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div className='comment-section'>
      <Comment profileObject={props}/>      
    </div>
  );
}

export default CommentList;