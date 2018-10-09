import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

import './PostContainer.css'

class PostContainer extends Component {
  constructor({
    post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
  }) {
    super()
    this.state = {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments
    }
  }

  addLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = this.state
    const { addLike } = this

    return (
      <div className="post-container">
        <div className="post-header">
          <img
            className="user-thumbnail"
            src={thumbnailUrl}
            alt="user thumbnail"
          />
          <p className="username">{username}</p>
        </div>

        <img className="post-image" src={imageUrl} alt="post" />
        <p onClick={addLike} className="likes-text">{likes} likes</p>
        <CommentSection comments={comments} />
        <p className="timestamp">{timestamp}</p>
      </div>
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer
