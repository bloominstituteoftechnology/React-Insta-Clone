import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const addNewComment = props => {
  return (
    <div className="comment-text">
      {/* <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span> */}
      <div>
        <p>Likes</p>
        <b>{props.comment.username}</b>
        {'-'}
        {props.comment.text}
      </div>
    </div>
  );
};

addNewComment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};


export default addNewComment;