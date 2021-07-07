import React from "react";

// import "./CommentSection.css";
import {
  CommentFormWrapper,
  CommentInput,
  CommentSubmitButton
} from "./CommentStyles.js";

const CommentForm = props => {
  return (
    <div>
      <CommentFormWrapper onSubmit={props.handleAddNewComment}>
        <CommentInput
          placeholder="Add a comment..."
          type="text"
          name="c"
          value={props.newComment}
          onChange={props.handleChangeHandler}
        />
        <CommentSubmitButton type="submit" onClick={props.handleAddNewComment}>
          ...
        </CommentSubmitButton>
      </CommentFormWrapper>
    </div>
  );
};

export default CommentForm;
