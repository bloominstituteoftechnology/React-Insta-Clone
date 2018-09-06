import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  console.log(props.likes);
  return (
    <div className="comment-text">
      {/* <span className="likes">{props.likes}</span> */}
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
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
