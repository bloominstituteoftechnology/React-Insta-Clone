import React from "react";
import './CommentSection.css';


const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment} >
      <input
        onChange={props.changeComment}
        value={props.comment}
        type="text"
        placeholder="Add comment... "
        className= "formholder"
      />
    </form>
  );
};

export default CommentInput;
