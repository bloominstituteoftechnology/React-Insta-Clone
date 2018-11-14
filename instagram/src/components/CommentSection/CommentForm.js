import React from 'react';
import PropTypes from 'prop-types'

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      onSubmit={(e) => props.onCommentFormSubmit(e)}>
      <input 
        type="text"
        name="text"
        onChange={(e) => props.onCommentFormChange(e)}
        placeholder="Add a comment..."
        value={props.commentText}/>
      <button>...</button>
    </form>
  );
}

CommentForm.propTypes = {
  onCommentFormSubmit: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  onCommentFormChange: PropTypes.func.isRequired,
}

export default CommentForm;