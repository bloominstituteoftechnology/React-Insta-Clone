import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'
import './post-container.css'
const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props.post;
  return (
    <div className="post-container">
      <div className="post-heading">
        <img src={thumbnailUrl} alt={`{username}'s profile picture`}/>
        <h1>{username}</h1>
      </div>
      <img src={imageUrl} alt={`{username}'s post`}/>
      <p>{likes} likes</p>
      <CommentSection comments={comments} />
    </div>
  )
}

PostContainer.propTypes = {

}

export default PostContainer
