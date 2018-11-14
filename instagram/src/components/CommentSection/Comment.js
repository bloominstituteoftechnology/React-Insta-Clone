import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <div className="comment--text">
        <span>{props.comment.username}</span> {props.comment.text}
      </div>
      <div
        className="comment--btn"
        onClick={() => props.handleRemoveComment()}
      >
        x
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default Comment;