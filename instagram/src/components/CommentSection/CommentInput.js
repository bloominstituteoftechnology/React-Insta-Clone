import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        onChange={props.changeComment}
        value={props.comment}
        type="text"
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
