import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';

const CommentDisplay = props => {
  return(
    <div className="comment">
      <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
    </div>
  );
};

CommentDisplay.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
}

export default CommentDisplay;
