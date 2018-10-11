import React from "react";

import "./CommentSection.css";

const CommentForm = props => {
  return (
    <div>
      <form onSubmit={props.handleAddNewComment}>
        <input
          placeholder="Add a comment..."
          type="text"
          name="c"
          value={props.newComment}
          onChange={props.handleChangeHandler}
        />
        <button type="submit" onClick={props.handleAddNewComment}>
          ...
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
