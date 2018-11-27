import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comments = props => {
  return(
    <div className='text'>
      <span className='username'>{props.comment.username}{'  '}</span>
      <span className='comment'>{props.comment.text}</span>
    </div>
  )
}

Comments.propTypes = {
  commentP: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comments;
