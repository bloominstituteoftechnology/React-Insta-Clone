import React, { Component } from 'react'
import './CommentSection.css'
import Comment from './Comment'
import CommentInput from './CommentInput'
import TimeStamp from './TimeStamp'
// import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: this.props.comments,
      newComment: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  handleOnSubmit = (searchPost) => {
    const newComment = this.state.newComment
    const newPost = this.props.comments.push({
      username: 'userman',
      text: newComment
    })
    this.setState({
      comments: newPost,
      newComment: ''
    })
  }
  render () {
    return (
      <div>
        {this.props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <TimeStamp posts={this.props.posts} />
        <CommentInput
          posts={this.props.posts}
          value={this.state.newComment}
          onChange={this.handleChange}
          onSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
}

// CommentSection.propTypes = {
//   comments: PropTypes.array
// }

export default CommentSection
