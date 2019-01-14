import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

function Comment(props) {
  // console.log(props);
  return (
    <div className="comment">
      USER: {props.commentData.username}
      COMMENT: {props.commentData.text}
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;