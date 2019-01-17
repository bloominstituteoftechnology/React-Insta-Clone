import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'
import './post-container.css'
const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post;
  return (
    <div className="post-container">
      <div className="post-heading">
        <div className="post-heading-img-container">
          <img src={thumbnailUrl} alt={`{username}'s profile picture`}/>
        </div>
        <h2>{username}</h2>
      </div>
      <div className="post-img-container">
        <img src={imageUrl} alt={`{username}'s post`}/>
      </div>
      

      
      <CommentSection comments={comments} likes={likes} userProfile={props.userProfile}/>
    </div>
  )
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  
}

export default PostContainer
