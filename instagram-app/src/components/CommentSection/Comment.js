import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment">
      <span className="usercomment">{props.comment.text}</span>{' '}
      <span className="username">-{props.comment.username}</span>
    </div>
  );
};