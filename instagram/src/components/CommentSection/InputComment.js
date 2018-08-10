import React from "react";
import CommentSection from './CommentSection';

 const InputComment = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        onChange={props.changeHandler}
        value={props.comment}
         type="text"
         placeholder="Add comment... "
     />
    </form> 
  );
 };

export default InputComment;
