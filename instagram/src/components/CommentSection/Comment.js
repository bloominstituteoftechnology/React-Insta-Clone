import React from 'react'
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className='comments'>
      <p><span className='username'>{props.comment.username}</span> <span>{props.comment.text} </span></p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}
export default Comment;