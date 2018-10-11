import React from 'react'

const CommentInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        placeholder='Add a comment...'
        type='text'
        className='comment-input'
        value={props.value}
        required
        ref={props.myRef}
        onChange={props.handleChange}
      />
    </form>
  )
}

export default CommentInput
