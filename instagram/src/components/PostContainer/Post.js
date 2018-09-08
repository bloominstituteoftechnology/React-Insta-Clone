import React from 'react';
import PropTypes from 'prop-types';
// import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import styled from 'styled-components';
import {Username} from '../Styles/Reusable'

const UserThumbnail = styled.img`
  border-radius: 50%;
  height: 30px;
  margin-left: 16px;
`

const PostImage = styled.img`
  width: 100%;
`

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <UserThumbnail src={props.data.thumbnailUrl} />
        <Username>{props.data.username}</Username>
      </div>
      <PostImage src={props.data.imageUrl} />
      <CommentSection
        comments={props.data.comments}
        likes={props.data.likes}
        time={props.data.timestamp}/>
  </div>
  )
}

Post.propTypes = {
  entry: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
}





export default Post
