import React from 'react';
import PropTypes from 'prop-types'

const Comment = (props) => {
  return (
    <div>
      <div>{props.comment.username}</div>
      <div>{props.comment.text}</div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    comment: PropTypes.string,    
  })
}

export default Comment;