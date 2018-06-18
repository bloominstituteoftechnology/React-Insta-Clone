import React from 'react'
import Comment from "./comment.js"

const CommentSection = props => {
  return (
    <div>
    {props.data.map(comment => (
      <Comment data={comment} />
    ))}
    </div>
  )
}

export default CommentSection;
