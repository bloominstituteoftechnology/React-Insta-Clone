import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import Post from './Post'

const PostContainer = props => {
  return (
    <div className='post-container'>
      <Post data={props.entry} />
  </div>
  )
}

PostContainer.propTypes = {
  entry: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
}




export default PostContainer
