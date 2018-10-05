import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="post-comment">
      <span className="post-comment-username">{props.username}</span>
      <span className="post-comment-text">{props.text}</span>
    </div>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Comment;
