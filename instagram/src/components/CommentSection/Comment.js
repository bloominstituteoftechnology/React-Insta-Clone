import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
  return (
    <p className='comment'><strong>{props.comment.username}</strong> {props.comment.text}</p>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;
