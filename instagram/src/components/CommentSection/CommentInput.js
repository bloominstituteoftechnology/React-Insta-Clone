import React from 'react';

const CommentInput = props => {
  return (
    <div className="comment-bar">
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment} />
    </form>
    </div>
  );
};

export default CommentInput;
