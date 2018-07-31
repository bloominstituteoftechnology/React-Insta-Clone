import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        value={props.comment}
        onChange={props.commentInput}
       type="text" 
       placeholder="Add comment... "
        />
    </form>
  );
};

export default CommentInput;
