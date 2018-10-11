import React from 'react';
                                          // submitComment
const CommentInput = props => {
  return (
    <form onSubmit={props.submitHandler}>   
      <input 
        type="text" 
        placeholder="Add a comment... " 
        onChange={props.commentHandler}   // changeComment
        value={props.comment}
        />
    </form>
  );
};

export default CommentInput;