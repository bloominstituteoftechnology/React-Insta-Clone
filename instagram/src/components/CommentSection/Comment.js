import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comment = props => {
  const { username, text } = props.comment;

  return (
    <div className="Comment-body">
      <h2>{username}</h2>
      <p>{text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
