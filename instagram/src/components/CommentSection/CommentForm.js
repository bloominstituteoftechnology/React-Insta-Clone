import React from 'react';
import PropTypes from 'prop-types'

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      onSubmit={(e, u, t) => props.onCommentFormSubmit(e, props.commentText.username, props.commentText.timestamp)}>
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

CommentForm.propTypes = {
  onCommentFormSubmit: PropTypes.func.isRequired,
  commentText: PropTypes.shape({
    username: PropTypes.string,
    timestamp: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onCommentFormChange: PropTypes.func.isRequired,
}

export default CommentForm;