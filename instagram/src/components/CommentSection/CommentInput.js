import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.add}>
      <input 
        type="text" 
        placeholder="Add a comment... " 
        onChange={props.commentHandler} 
        />
    </form>
  );
};

export default CommentInput;