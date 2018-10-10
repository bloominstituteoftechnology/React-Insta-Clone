import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input placeholder="Add a comment..." value={props.comment} onChange={props.changeHandler}/>
    </form>
  )
}
export default CommentInput;