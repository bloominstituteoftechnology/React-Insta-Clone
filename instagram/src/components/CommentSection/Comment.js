import React from 'react'

const Comment = (props) => {
  return (
    <div className='comment-section' key={props.comment.text}>
      <span className='username-comment'>
        <strong> {props.comment.username}</strong> {props.comment.text}
      </span>
    </div>
  )
}

export default Comment
