import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const CommentSection = props => {
  return (
  <div className="comment">
    <h4>{props.comment.username} <span className="timestamp">{props.comment.timestamp}</span></h4>
    <p>{props.comment.text}</p>
  </div>
  );
}

CommentSection.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string)
}

export default CommentSection;