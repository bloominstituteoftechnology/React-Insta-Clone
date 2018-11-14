import React from 'react';
import PropTypes from 'prop-types'

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      onSubmit={(e) => props.handleFormInputSubmit(e)}>
      <input 
        type="text"
        name="text"
        onChange={(e) => props.handleFormInputChange(e)}
        placeholder="Add a comment..."
        value={props.commentText}/>
      <button>...</button>
    </form>
  );
}

CommentForm.propTypes = {
  handleFormInputSubmit: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  handleFormInputChange: PropTypes.func.isRequired,
}

export default CommentForm;