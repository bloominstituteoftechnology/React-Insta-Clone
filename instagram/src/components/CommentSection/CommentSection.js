import React from 'react';

const CommentSection = props => {
  return (
    <div className='comment-section'>
      {props.post.comments.map(comment => {
        return <Comment key={comment.username} comment={comment.text} />
      })}
    </div>
  )
}

export default CommentSection;
