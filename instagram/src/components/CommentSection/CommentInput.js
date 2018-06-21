import React from 'react'

const CommentInput = (props) => {
  let inputRef = null
  return (
    <form onSubmit={(e) => props.onSubmit(props.posts.comments, e)}>
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
