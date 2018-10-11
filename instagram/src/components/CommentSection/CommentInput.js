import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input className='post__input--input' type='text' value={props.comment} placeholder='Add a comment...' onChange={props.changeComment} />
    </form>
  )
}

export default CommentInput;