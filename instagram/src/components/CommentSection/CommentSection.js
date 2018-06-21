import React from 'react';


const CommentSection = props => {
  return (
  props.comments.map((comment, index) => {
    return <p onClick={props.deleteCommentHandler}
    key={Math.random()} index={index}><strong index={index}>{comment.username}</strong> {comment.text}</p>
  })
)
}


export default CommentSection;
