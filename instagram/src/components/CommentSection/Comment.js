import React from 'react'

const Comment = (props) => {
  return (
    <div className='comment-section' key={props.keyId}>
      <span className='username-comment'>
        <strong> {props.comments.username}</strong> {props.comments.text}
      </span>
    </div>
  )
}

export default Comment
