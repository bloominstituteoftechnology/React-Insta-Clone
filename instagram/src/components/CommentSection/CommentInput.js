import React from 'react';

const CommentInput = props => {
  return (
    <div className="comment-input">
      <form action="" onSubmit={props.handleAddComment} data-key={props.index}>
        <input type="text" placeholder="Add a comment"/>
      </form>
      <span>...</span>
    </div>
  )
}

export default CommentInput;