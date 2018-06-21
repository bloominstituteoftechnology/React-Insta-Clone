import React from 'react'

const CommentInput = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        placeholder='Add a comment...'
        type='text'
        className='comment-input'
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  )
}

export default CommentInput
