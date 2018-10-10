import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CommentSection.css'

class CommentSection extends Component {
  constructor({ comments }) {
    super()
    this.state = {
      comments,
      username: localStorage.getItem('username'),
      newComment: ''
    }
  }

  addNewComment = event => {
    event.preventDefault()
    const { comments, username, newComment } = this.state

    this.setState({
      comments: [
        ...comments,
        { username, text: newComment }
      ],
      newComment: ''
    })
  }

  handleCommentChange = event => {
    this.setState({ newComment: event.target.value })
  }

  render() {
    const { comments, newComment } = this.state
    const { addNewComment, handleCommentChange } = this

    return (
      <div className="comment-section">
        {comments.map(({ username, text }, i) => (
          <div key={i} className="comment">
            <p className="comment-username">{username}</p>
            <p className="comment-text">{text}</p>
          </div>
        ))}
        <form onSubmit={addNewComment}>
          <input
            type="text"
            onChange={handleCommentChange}
            placeholder="Add a comment ..."
            value={newComment}
          />
        </form>
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default CommentSection
