import React from 'react'
import PropTypes from "prop-types";

const Post = (props) => {
  return (
    <div>
      <div>{props.post.username}</div>
      <div>{props.post.thumbnailURL}</div>
      <div>{props.post.imageURL}</div>
      <div>{props.post.likes}</div>
      <div>{props.post.timestamp}</div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired      
    })
  })
}

export default Post