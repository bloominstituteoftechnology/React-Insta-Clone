import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input type='text' placeholder="Add comment... " value={props.commentInputText} onChange={props.handleCommentInput} onSubmit={props.addNewComment} />
      <input type='submit'/>
      
    </form>
  );
};

export default CommentInput;