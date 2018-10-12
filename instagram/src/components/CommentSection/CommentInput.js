import React from 'react';

const CommentInput = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <input value={props.value} onChange={props.inputHandler} className='addComment' type='text' placeholder='Add a comment...' />
    </form>
  )
}

export default CommentInput