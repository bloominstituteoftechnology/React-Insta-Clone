import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        placeholder="add comment.."
        value={props.comment}
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
