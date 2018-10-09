import React from 'react'
import PropTypes from 'prop-types'

const CommentSection = ({ comments }) => (
  <div>
    {comments.map(({ username, text }, i) => (
      <div key={i}>
        <p>{username}</p>
        <p>{text}</p>
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
