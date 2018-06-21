import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <div className="input-box">
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      </div>
    </form>

  );
};

export default CommentInput;
