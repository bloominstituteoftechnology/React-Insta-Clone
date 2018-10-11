import React, { Component } from 'react'
import './CommentSection.css'
import Comment from './Comment'
import TimeStamp from './TimeStamp'
// import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: props.comments,
      newComment: ''
    }
    this.focusInput = this.focusInput.bind(this)
  }

  focusInput () {
    this.inputText.focus()
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
      <div className='comment-section'>
        <div className='icons'>
          <i
            className='far fa-heart fa-lg'
            onClick={(e) => {
              this.props.handleLikes(e, this.index)
              e.target.classList.toggle('heart-red')
            }}
          />
          <i onClick={this.focusInput} className='far fa-comment fa-lg' />
        </div>
        <span>
          <strong>{this.props.likes} likes</strong>
        </span>
        {this.state.comments.map((comment, index) => (
          <Comment key={this.props.keyId + Math.random()} comment={comment} />
        ))}
        <TimeStamp timeStamp={this.props.timeStamp} />
        <form onSubmit={this.handleOnSubmit}>
          <input
            placeholder='Add a comment...'
            type='text'
            className='comment-input'
            value={this.state.newComment}
            required
            ref={(input) => {
              this.inputText = input
            }}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default CommentSection
