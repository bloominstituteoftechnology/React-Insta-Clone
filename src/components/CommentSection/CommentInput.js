import React from "react";

const CommentInput = props => {
  return (
    <form
      onSubmit={e => {
        props.addComment(e);
      }}
      onChange={props.handleChange}
    >
      <input
        name="newComment"
        type="text"
        value={props.newComment}
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
