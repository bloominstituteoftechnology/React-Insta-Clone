import React from 'react';
import './Comment.css'

const CommentInput = props => {
  return (
    <form onSubmit={props.addComment}>
      <input
        className="comment-input"
        value={props.comment}
        onChange={props.commentInput}
       type="text" 
       placeholder="Add comment... "
        />
    </form>
  );
};

export default CommentInput;
