import React from 'react';

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      action="submit">
      <input 
        type="text"
        name="text"
        onChange={(e, u, t) => props.onCommentFormChange(e,props.commentText.username, props.commentText.timestamp)}
        placeholder="Add a comment..."
        value={props.commentText.text}/>
      <button>...</button>
    </form>
  );
}

export default CommentForm;