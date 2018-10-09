import React from 'react'
import PropTypes from 'prop-types'

import './CommentSection.css'

const CommentSection = ({ comments }) => (
  <div className="comment-section">
    {comments.map(({ username, text }, i) => (
      <div key={i} className="comment">
        <p className="comment-username">{username}</p>
        <p className="comment-text">{text}</p>
      </div>
    ))}
  </div>
)

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default CommentSection
