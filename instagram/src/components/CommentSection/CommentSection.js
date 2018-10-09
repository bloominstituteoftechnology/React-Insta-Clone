import React from 'react';
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map((com, idx) => (
        <Comment comment={com} />
      ))}
    </div>
  )
}

export default CommentSection;