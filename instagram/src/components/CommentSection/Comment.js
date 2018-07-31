import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="row">
      <div className="likes">{props.comment.likes}</div>
    <div className="row">
      <div className="comment">{props.comment.text}</div>{' '}
      <div className="user">-{props.comment.username}</div>
    </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
  })
};

    export default Comment;
