import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'
const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props.post;
  return (
    <div>
      <h1>{username} posted</h1>
      <img src={imageUrl} alt={`{username}'s post`}/>
      <p>{likes} likes</p>
      <CommentSection comments={comments} />
    </div>
  )
}

PostContainer.propTypes = {

}

export default PostContainer
