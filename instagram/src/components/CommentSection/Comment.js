import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ text, username }) => (
  <div>
    <span className="username">{username}</span>
    {' ' + text}
  </div>
);

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
};

export default Comment;
