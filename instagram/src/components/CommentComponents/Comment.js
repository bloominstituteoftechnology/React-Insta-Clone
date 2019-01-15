import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = props => {
  return (
    <div className="post-comment">
      <span className="post-comment-username">{props.commentData.username}</span> <span className="post-comment-text">{props.commentData.text}</span>
    </div>
  )
};

Comment.propTypes = {
  commentData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

Comment.defaultProps = {
  username: "Instagram User" // Temporary until user authentication functionality is built
}

export default Comment;