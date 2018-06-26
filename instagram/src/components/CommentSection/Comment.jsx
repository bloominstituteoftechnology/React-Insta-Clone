import React from 'react';
import './CommentStyles.css';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>{' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;