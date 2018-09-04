import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input type='text' value={props.commentInputText} onChange={props.handleCommentInput} placeholder="Add comment... " />
      <button onClick={props.addComment}>Add Comment</button>
    </form>
  );
};

export default CommentInput;