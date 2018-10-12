import React from "react";
import { AddCommentInput } from "../Styles/Styles";

const AddComment = props => {
  return (
    <form onSubmit={event => props.addNewComment(event, props.comments.length)}>
      <AddCommentInput
        className="add-comment input"
        type="text"
        placeholder="Add a comment..."
        onChange={event =>
          props.changeHandler("newComment", event.target.value)
        }
        value={props.newComment}
      />
    </form>
  );
};

export default AddComment;
