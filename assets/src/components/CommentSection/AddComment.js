import React from "react";

const AddComment = props => {
  return (
    <form onSubmit={event => props.addNewComment(event, props.comments.length)}>
      <input
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
