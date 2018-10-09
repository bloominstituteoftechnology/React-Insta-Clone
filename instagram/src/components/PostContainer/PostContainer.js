import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
}) => (
  <div>
    <img src={thumbnailUrl} alt="user thumbnail" />
    <p>{username}</p>
    <img src={imageUrl} alt="post" />
    <p>Likes: {likes}</p>
    <CommentSection comments={comments} />
    <p>{timestamp}</p>
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
