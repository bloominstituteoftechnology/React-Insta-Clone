import React from 'react';

const CommentForm = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Make a Comment!"
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentForm;