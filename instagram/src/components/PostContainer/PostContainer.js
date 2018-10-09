import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className='post'>
      <div className='post-header'>
        <img src={props.data.thumbnailUrl} alt='thumbnail'/>
        <p>{props.data.username}</p>
      </div>
      <img className='post-image' src={props.data.imageUrl} alt=''/>
      <div className='post-icons'>
        <p>heart</p>
        <p>comment</p>
      </div>
      <p className='likes'>{props.data.likes} likes</p>
      <CommentSection comments={props.data.comments} comment={props.comment} />
    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer; 
