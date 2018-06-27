import React from 'react';

const CommentForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addNewComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={props.handleCommentInput}
          value={props.comment}
        />
      </form>
    </div>
  );
};

export default CommentForm;
