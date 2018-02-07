import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return(
    <div className="main">
      <div className="top">
        <img className='profile' src={props.post.thumbnailUrl} alt="profile pic" />
        <p className="user">{props.post.username}</p>
      </div>
      <img className='post' src={props.post.imageUrl} alt="the main image" />
      <div className="likes">
        <p className="NoLikes">{props.post.likes} likes</p>
      </div>
    </div>
  )
}

export default PostContainer;
