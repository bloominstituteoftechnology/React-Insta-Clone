import React from 'react'
import './Comment.css'

const Comment = (props) => {
  return (
    <div className="Comment">
      <p>{props.comment.username}: {props.comment.text}</p>
    </div>
  )
}

export default Comment
