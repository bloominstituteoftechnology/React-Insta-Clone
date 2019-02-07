import React from 'react'
import PropTypes from 'prop-types';
import {UserDetails, ProfileImage, PostImageContainer, PostImage, } from './styled'

const Post = props => {
  return (
    <div>
      <UserDetails>
        <div className='profileImgContainer'>
          <ProfileImage src={props.userData.thumbnailUrl} alt='post images'/>
        </div>
        <p>{props.userData.username}</p>
      </UserDetails>
      <PostImageContainer>
        <PostImage src={props.userData.imageUrl} alt='post' />
      </PostImageContainer>
    </div>
  )
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Post;