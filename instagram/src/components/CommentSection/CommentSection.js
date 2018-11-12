import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
  <div className="comment">
    <p>username <span className="timestamp">last comment date</span></p>
    <p>comment</p>
  </div>
  );
}

CommentSection.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string)
}

export default CommentSection;