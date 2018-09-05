import React from 'react';

const CommentInput = props => {
  return (
    <form
      onSubmit={event => {
        props.addComment(event);
      }}
      onChange={props.handleChange}
    >
      <input
        name="newComment"
        value={props.newComment}
        type="text"
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
