import React, { Component } from 'react';
import CommentSection from '../CommentSection/comment-section'


function PostContainer(props) {
  // console.log(props.username);
  return (
    <div className='post-container'>
      <h2>Post Container</h2>
      <p>{props.post.username}</p>
      <p>{props.post.thumbnailUrl}</p>
      <p>{props.post.imageUrl}</p>
      <p>{props.post.likes}</p>
      <p>{props.post.timestamp}</p>
      <CommentSection comments={props.post.comments} />
    </div>
  )

}

export default PostContainer;