import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="comment-text">
    	  <span className="user"><strong>{props.comment.username}</strong></span>
      <span className="comment">{props.comment.text}</span>
     
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;