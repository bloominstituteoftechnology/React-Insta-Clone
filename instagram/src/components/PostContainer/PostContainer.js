import React from 'react'
import PropTypes from 'prop-types'

const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props.post;
  return (
    <div>
      <h1>{username} posted</h1>
      <img src={imageUrl} />
    </div>
  )
}

PostContainer.propTypes = {

}

export default PostContainer
