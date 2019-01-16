import React from "react";

const AddComment = props => {
  return (
    <div className="addComment">
      <form onSubmit={e => props.addComment(e, props.username)}>
        <input
          type="text"
          name="inputText"
          placeholder="Add a Comment..."
          value={props.inputText}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default AddComment;
