import React from "react";
import "./Comment.css";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        className="Comment-add-input"
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
