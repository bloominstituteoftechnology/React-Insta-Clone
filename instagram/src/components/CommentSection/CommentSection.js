import React from 'react'
import Comment from './Comment';

const CommentSection = props => {
  return (
  <div>{props.comments.map(comment => <Comment c={comment} />)}  <input placeholder="Add a comment" /></div>
  )
}

export default CommentSection;