import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const CommentSection = props => {
  return (
  <div className="comment">
    <h4>username <span className="timestamp">timestamp</span></h4>
    <p>comment</p>
  </div>
  );
}

CommentSection.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string)
}

export default CommentSection;