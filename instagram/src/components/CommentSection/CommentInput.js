import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit = {props.submitHandler}>
      <input onChange = {props.changeHandler} type="text" value={props.comment} placeholder="Add comment..." />
    </form>
  );
};

export default CommentInput;

//generic changeHandler to potentially be used again for things other than comments
// controlled input. value is bound to state, also updates. state drives view. 