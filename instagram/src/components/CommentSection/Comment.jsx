import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  //comment is passed from post container as props
  return (
    <div>
      <div>{props.comment.username}</div>
      <div>{props.comment.text}</div>
    </div>
  );
};

export default Comment;
