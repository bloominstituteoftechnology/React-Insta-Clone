import React from 'react'

export default (props) => {
  return (
    <div>
      <p><span>{props.comment.username}</span> <span>{props.comment.text} </span></p>
    </div>
  )
}
