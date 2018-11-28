import React, { Component } from 'react';

const CommentInput = props => {
  return(
    <form className='comment-input' onSubmit={props.submit}>
      <input
        type='text'
        placeholder='Add comment ... '
        value={props.comment}
        onChange={props.change}
      />
    </form>
  )
}

export default CommentInput;
