import React from 'react';

const CommentSection = props => {
  return(
    <div className="comments">
      {props.comments.map(comment => (
        <div>
          <p><strong>{comment.username}</strong> {comment.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentSection;
