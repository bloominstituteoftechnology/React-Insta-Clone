import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';


const Comment = props => {
  return (
    <div className="comment_container">
      <p><span>{props.comment.username}</span>     {props.comment.text}</p>
    </div>
  )
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
}

export default Comment;
