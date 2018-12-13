import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <div className="username">{props.comment.username}</div>
      <p className="text">{props.comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;