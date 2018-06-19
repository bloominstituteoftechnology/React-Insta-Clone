import React, { Component } from 'react'
import './CommentSection.css'
// import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: props.comments
    }
  }

  render () {
    return this.state.comments.map((comment) => (
      <div className='comment-section' key={comment.text}>
        <span className='username-comment'>
          <strong> {comment.username}</strong> {comment.text}
        </span>
      </div>
    ))
  }
}

// CommentSection.propTypes = {
//   comments: PropTypes.array
// }

export default CommentSection
