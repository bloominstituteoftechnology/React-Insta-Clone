import React from 'react';


const CommentSection = props => {
  return (
  props.comments.map(comment => {
    return <p key={Math.random()}><strong>{comment.username}</strong> {comment.text}</p>
  })
)
}


export default CommentSection;
