import React from 'react'

const CommentSection = props => {
  return (
  <div>{props.comments.map(comment => <div>{comment.username}</div>)}</div>
  )
}

export default CommentSection;