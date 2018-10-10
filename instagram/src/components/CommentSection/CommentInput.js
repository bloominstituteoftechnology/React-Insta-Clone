import React from 'react';

const CommentInput = props => {
  return (
    <div>
      <input placeholder="Add a comment..." value={props.comment} onChange={props.changeHandler}/>
    </div>
  )
}
export default CommentInput;