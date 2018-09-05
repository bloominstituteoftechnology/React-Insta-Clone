import React from 'react';

function CommentInput(props) {
  return (
    <form onSubmit={props.addComment} onChange={props.handleInput}>
      <input type="text" placeholder="Add comment... " name='comment' value={props.commentValue} />
      <input type='submit' value='post' />
    </form>
  );
}

export default CommentInput;