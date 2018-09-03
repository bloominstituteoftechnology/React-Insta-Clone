import React from 'react'
import './Comments.css'

const Comment = (props) => {
  return (
    <React.Fragment>
      <p>{props.comment.username}: {props.comment.text}</p>
    </React.Fragment>
  )
}

export default Comment
