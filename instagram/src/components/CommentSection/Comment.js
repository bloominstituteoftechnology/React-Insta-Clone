import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

let moment = require('moment');

const Comment = props => {
  return (
    <div className="comment-text">
    <span className="user">{props.comment.username}</span>{' '}
      <span className="comment">{props.comment.text}</span>
    <div className="time-since">
    <span>{moment().startOf('hour').fromNow()}</span>
    </div>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };