import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ text, username }) => (
  <div className="comment">
    <span className="username">{username}</span>
    {' ' + text}
  </div>
);

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
};

export default Comment;
