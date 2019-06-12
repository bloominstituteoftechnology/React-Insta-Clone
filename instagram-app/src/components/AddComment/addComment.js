import React from "react";
import "./addComment.css";

const addComent = props => {
  return (
    <div className="add-comment">
      <form onSubmit={event => props.addNewComment(event, props.id)}>
        <input
          className="search"
          onChange={props.onChange}
          value={props.value}
          type="text"
          placeholder="Add a comment..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default addComent;