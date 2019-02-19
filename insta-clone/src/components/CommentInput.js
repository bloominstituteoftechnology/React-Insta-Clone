import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        className='add-comment'
        type='text'
        placeholder='Add a comment...'
        value={props.comment}
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
