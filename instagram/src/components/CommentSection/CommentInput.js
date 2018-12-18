import React from "react";
import PropTypes from 'prop-types';

const CommentInput = props => {
  return (
    <div className="comment-container">
      <form onSubmit={props.submitComment} className="form-comment">
        <input
          className="input-field-comment"
          type="text"
          value={props.comment}
          placeholder="Add a comment... "
          onChange={props.changeComment}
        />
      </form>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};

CommentInput.propTypes = {
  comment: PropTypes.string,
  submitComment: PropTypes.func,
  changeComment: PropTypes.func
}

export default CommentInput;
