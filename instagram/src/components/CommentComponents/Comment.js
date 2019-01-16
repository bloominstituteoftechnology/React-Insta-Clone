import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = props => {
  return (
    <div className="post-comment">
      <div className="post-comment-box">
        <div className="post-comment-text">
          <span className="post-comment-text-username">{props.commentData.username}</span> 
          <span className="post-comment-text-usercomment">{props.commentData.text}</span>
        </div>
        <div className="post-comment-heart">
          <img 
            src={props.commentData.likes.includes(props.currentUser) ? "images/heart-on.png" : "images/heart-off.png"} 
            alt="Heart"
            name="heart-comment-btn"
            data-post_id={props.post_id}
            data-comment_id={props.commentData._id}
            onClick={props.handleClick} /> 
        </div>
      </div>
      <div className="post-comment-options">
        <div 
          className={props.commentData.username === props.currentUser ? 
                      "post-comment-options-item" :
                      "post-comment-options-item--hidden"}
          data-name="delete-comment-btn"
          data-post_id={props.post_id}
          data-comment_id={props.commentData._id}
          onClick={props.handleClick} >
          Delete
        </div>
      </div>
    </div>
  )
};

Comment.propTypes = {
  currentUser: PropTypes.string.isRequired,
  post_id: PropTypes.string.isRequired,
  commentData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

Comment.defaultProps = {
  username: "Instagram User" // Temporary until user authentication functionality is built
};

export default Comment;