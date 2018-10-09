import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';


const CommentSection = props => (
  <div className='comment-section'>
    Comment Section!!
    {props.comments.map(comment => (
      <div>
        <p>{comment.username}</p>
        <p>{comment.text}</p>
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