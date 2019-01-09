import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
 const Comment = props => {
  return (
    <div className='commentSection'>
     <span className='username'>{props.comment.username} </span>
      {/* username info */}
      <span className='comment'>{props.comment.text}</span>{' '} 
      {/* comment text */}
     
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