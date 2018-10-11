import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';



const Comment = props => {
  return (
    <div className='post__comment'>

      <span className='post__comment--username'>{props.comment.username}</span>
      <span className='post__comment--comment'>{props.comment.text}</span>

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