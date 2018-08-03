import React from "react";

const CommentInput = (props) => {
  return (
    <form
      onSubmit={event => props.commentSubmit(event)}
    >
      <input
        onChange={props.addNewComment}
        value={props.newValue}
        id="input"
        type="text"
        placeholder="     Add a comment... "
      />
    </form>
  );
};

export default CommentInput;
