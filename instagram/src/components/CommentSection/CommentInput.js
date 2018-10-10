import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input 
        type="text" 
        placeholder="Add a comment... " 
        onChange={props.commentHandler} 
        value={props.comment}
        />
    </form>
  );
};

export default CommentInput;