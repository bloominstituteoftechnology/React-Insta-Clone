import React, { Component } from 'react';
import CommentSection from '../CommentSection/comment-section'
import './post-container.css'


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
      <div>{props.post.comments.map((comment, i) => {
        return (
          <CommentSection
          key={i} 
          username={comment.username}
          text={comment.text}
          />
        )

      })}
      </div>
    </div>
  )

}

export default PostContainer;