import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input onChange = {props.changeHandler} type="text" value={props.comment} placeholder="Add comment..." />
    </form>
  );
};

export default CommentInput;

//generic changeHandler to potentially be used again for things other than comments
