import React from 'react';
import PropTypes from 'prop-types'

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      onSubmit={(e) => props.handleInputSubmit(e)}>
      <input 
        type="text"
        name="text"
        onChange={(e) => props.handleInputChange(e)}
        placeholder="Add a comment..."
        value={props.commentText}/>
      <button>...</button>
    </form>
  );
}

CommentForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  handleInputSubmit: PropTypes.func.isRequired,
}

export default CommentForm;