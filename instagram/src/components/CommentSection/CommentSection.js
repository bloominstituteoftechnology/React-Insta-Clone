import React, { Component } from 'react'
import './CommentSection.css'
import Comment from './Comment'
import CommentInput from './CommentInput'
// import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: props.comments
    }
  }

  render () {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentInput posts={this.props.posts} />
      </div>
    )
  }
}

// CommentSection.propTypes = {
//   comments: PropTypes.array
// }

export default CommentSection
