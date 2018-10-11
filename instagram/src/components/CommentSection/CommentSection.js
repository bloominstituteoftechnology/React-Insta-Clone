import React, { Component } from 'react'
import './CommentSection.css'
import Comment from './Comment'
import TimeStamp from './TimeStamp'
import CommentInput from './CommentInput'
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

  handleChange = ({ target }) => {
    this.setState({
      newComment: target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const username = JSON.parse(localStorage.getItem('username'))
    const newComment = { username, text: this.state.newComment }
    this.setState(
      {
        comments: [ ...this.state.comments, newComment ],
        newComment: ''
      },
      this.setLocalStorage
    )
  }

  render () {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment key={this.props.keyId + Math.random()} comment={comment} />
        ))}
        <TimeStamp timeStamp={this.props.timeStamp} />
        <CommentInput
          handleSubmit={this.handleOnSubmit}
          value={this.state.newComment}
          handleChange={this.handleChange}
          myRef={this.props.myRef}
        />
      </div>
    )
  }
}

export default CommentSection
