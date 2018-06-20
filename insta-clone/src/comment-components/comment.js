import React from 'react'

const Comment = props => {
  return (
    <div className="comment">
      <h1>{props.data.username}</h1>
      <span>{props.data.text}</span>
    </div>
  )
}

export default Comment;
