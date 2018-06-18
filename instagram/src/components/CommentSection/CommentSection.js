import React from 'react'
import './CommentSection.css'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
  return props.comments.map((comment) => (
    <div className='comment-section' key={comment.text}>
      <h6>{comment.username}</h6>
      <p>{comment.text}</p>
    </div>
  ))
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection
