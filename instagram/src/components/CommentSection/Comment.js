import React from 'react';
import './CommentSection.css';
import propTypes from 'prop-types'
const Comment = props => {
  return(
      <span><span className="user">{props.obj.username}</span>{props.obj.text}</span>
  )
}

Comment.propTypes = {
  comment: propTypes.shape({
    username: propTypes.string,
    text: propTypes.string
  })
}

export default Comment;
