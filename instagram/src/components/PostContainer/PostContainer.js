import React from 'react';

import './PostContainer.scss';

export default function PostContainer({data}) {

  const {comments, imageUrl, likes, thumbnailUrl, timestamp, username} = data;

  return (

    <div className='post'>

      <div className='header'>

        <img src={thumbnailUrl}></img>
        <h3>{username}</h3>

      </div>

      <img className='post-img' src={imageUrl}></img>

      <div className='like-comment'>

        <div>

        <p className='far fa-heart'></p>
        <p className='far fa-comment'></p>

        </div>

        <p>{likes} likes</p>

      </div>

    </div>

  );

}
