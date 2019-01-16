import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostIcons = props => {
  return (
    <div className="post-icons">
      <img 
        src={props.likes.includes(props.currentUser) ? "images/heart-on.png" : "images/heart-off.png"}
        alt="Heart"
        name="heart-btn" 
        data-_id={props._id}
        onClick={props.handleClick}/>
      <img 
        src="images/comment.png" 
        alt="comment"
        name="comment-btn"
        data-_id={props._id}
        onClick={props.handleClick}/>
    </div>
  );
};

PostIcons.propTypes = {
  currentUser: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

PostIcons.defaultProps = {
  currentUser: "Instagram User"
}

export default PostIcons;