import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

import './PostContainer.css'

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
}) => (
  <div className="post-container">
    <div className="post-header">
      <img className="user-thumbnail" src={thumbnailUrl} alt="user thumbnail" />
      <p className="username">{username}</p>
    </div>

    <img className="post-image" src={imageUrl} alt="post" />
    <p className="likes-text">{likes} likes</p>
    <CommentSection comments={comments} />
    <p className="timestamp">{timestamp}</p>
  </div>
)

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
