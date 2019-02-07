import React from 'react';
import {AddComment} from './styled'

const CommentInput = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <AddComment value={props.value} onChange={props.inputHandler} type='text' placeholder='Add a comment...' />
    </form>
  )
}

export default CommentInput