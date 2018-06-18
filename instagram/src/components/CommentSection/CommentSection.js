import React from 'react'
import Comment from './Comment';

const CommentSection = props => {
  return (
  <div>{props.comments.map(comment => <div><Comment c={comment} /></div>)}</div>
  )
}

export default CommentSection;