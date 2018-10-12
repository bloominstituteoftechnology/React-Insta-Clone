import React from "react";

import "./CommentSection.css";

const CommentInput = props => {
  return (
    <div className="add-comment-wrapper">
      <form onSubmit={props.submitComment}>
        <input
          className="input"
          type="text"
          value={props.comment}
          placeholder="Add a comment..."
          onChange={props.changeComment}
        />
      </form>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};

export default CommentInput;
