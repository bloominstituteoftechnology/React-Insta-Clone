import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
