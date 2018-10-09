import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';


const CommentSection = props => (
  <div className='comment-section'>
    {props.comments.map((comment, idx) => (
      <div className='comment' key={idx}>
        <p className='comment-username'>{comment.username}:</p>
        <p className='comment-text'>{comment.text}</p>
      </div>
    ))}
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;