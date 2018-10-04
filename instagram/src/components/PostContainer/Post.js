import React from 'react'
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div>
      <div className='userDetails'>
        <img src={props.userData.thumbnailUrl} alt='post images'/>
        <p>{props.userData.username}</p>
      </div>
      <div className='postImage'>
        <img src={props.userData.imageUrl} alt='post' />
      </div>
    </div>
  )
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Post;