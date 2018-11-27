import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comments = props => {
  return(
    <div className='text'>
      <h2 className='user'>{props.comment.username}</h2>
      <p className='comment'>{props.comment.text}</p>
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
