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
      comments: props.comments,
      newComment: ''
    }
  }

  componentDidMount () {
    const id = this.props.keyId
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.keyId))
      })
    } else {
      this.setLocalStorage()
    }
  }

  setLocalStorage = () => {
    localStorage.setItem(this.props.keyId, JSON.stringify(this.state.comments))
  }

  componenetWillUnmount () {
    this.setLocalStorage()
  }

  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const newComment = { username: 'userMan', text: this.state.newComment }
    const newPost = this.state.comments.slice()
    newPost.push(newComment)
    this.setState({
      comments: newPost,
      newComment: ''
    })
    setTimeout(() => {
      this.setLocalStorage()
    }, 1000)
  }

  render () {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment key={this.props.keyId + Math.random()} comments={comment} />
        ))}
        <TimeStamp timeStamp={this.props.timeStamp} />
        <CommentInput
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
