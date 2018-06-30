import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
  return(
    <form onSubmit={props.submitHandler}>
      <input
        placeholder="add comment..."
        type="text"
        value={props.val}
        onChange={props.watchInput}

      />
    </form>
  )
}

export default CommentInput;
