import React from 'react';
import './PostContainer.css';

const Post = (props) => {
  return (
      <div>
        <p className="post-header"> <img className="profile-pic" src={props.post.thumbnailUrl} alt='Profile' /> {props.post.username}</p>
        <img src={props.post.imageUrl} alt='Posted' />
        <p>{props.post.likes} likes</p>
        <p>Posted {props.post.timestamp}</p>
      </div>
    );
}

export default Post;
