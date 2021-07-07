import React from 'react';
import PropTypes from 'prop-types';
const Comment = props => {
  return <p><strong>{props.comment.username}</strong> {props.comment.text}</p>;
};

export default Comment;
