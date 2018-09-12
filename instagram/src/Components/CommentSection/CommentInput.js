import React from 'react';

const CommentInput = props => {
  return (
    <form
      className="comment-input"
      onSubmit={props.addNewComment}
      onChange={props.handleChange}
    >
      <input
        className="comments-container"
        type="text"
        name="newComment"
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
