import React from 'react'
import './CommentSection.css'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
  return props.comments.map((comment) => (
    <div className='comment-section' key={comment.text}>
      <span className='username-comment'>
        <strong> {comment.username}</strong> {comment.text}
      </span>
      {/* <span>{comment.text}</span> */}
    </div>
  ))
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection
