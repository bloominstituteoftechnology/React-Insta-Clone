import React from 'react';

const CommentInput = props => {
  return (
    <div className="comment-container">
    <form onSubmit={props.submitComment}>
      <input
        className="input-field"
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
    </div>
  );
};

export default CommentInput;
