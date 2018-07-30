import React from 'react';

const Post = (props) => {
  return (
      <div className="user-post">
        <p> <img className="profile-pic" src={props.post.thumbnailUrl} alt='Profile Image' /> {props.post.username}</p>
        <img src={props.post.imageUrl} alt='Posted Image' />
        <p>{props.post.likes} likes</p>
        <p>Posted: {props.post.timestamp}</p>
      </div>
    );
}

export default Post;
