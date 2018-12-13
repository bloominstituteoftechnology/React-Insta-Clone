import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div className="comments-con">
      <div className="comments-icons"></div>
      <div className="comments-likes">{props.likes} likes</div>
      <div className="comments-con">{props.comments.map(comment => (
        <div className="comments-comment">
          <div className="comments-username">{comment.username}</div>
          <div className="comments-text">{comment.text}</div>
        </div>
      ))}
      </div>
      <div className="timestamp">{props.timestamp}</div>
      <div className="comments-input">
        <input type="text" placeholder="Add a comment..."/>
      </div>
    </div>
  )
}

CommentSection.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string
};

export default CommentSection;