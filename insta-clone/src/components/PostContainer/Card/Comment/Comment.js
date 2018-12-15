import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
  const { comment } = props;

  return (
    <div className="commentBox">
      <p><span>{comment.username}</span>{comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;