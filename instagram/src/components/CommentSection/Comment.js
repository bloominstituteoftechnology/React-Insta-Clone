import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className = 'comment-text'>
      <span className = 'comment'>{props.comment.text}</span>
      <span className = 'user'>{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string // maybe test an .isRequired here?
  })
};

export default Comment;
