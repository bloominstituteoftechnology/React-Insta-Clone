import React from 'react';
import './PostContainer.css';
import CommentSectionContainer from './CommentSectionContainer';
import './PostContainer.css';

function PostContainer(props) {
  const { thumbnailUrl, username, comments, imageUrl, likes } = props.post;
  return (
    <>
      <div className='post'>
        <div className='post-header'>
          <img src={thumbnailUrl} alt={username} className='profile-pic' />
          <h3 className='main-username'>{username}</h3>
        </div>
        <img src={imageUrl} alt={username} />
        <p className='likes'>{likes} likes</p>
        <CommentSectionContainer comments={comments} />
      </div>
    </>
  );
}

export default PostContainer;
