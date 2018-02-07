import React from 'react';
import CommentSection from '../CommentSection/comment-section'
import './post-container.css'

function PostContainer(props) {
  // console.log(props.username);
  return (
    <div className='post-container'>
      <h2>Post</h2>
      <p>User: {props.post.username}</p>
      <p>{props.post.thumbnailUrl}</p>
      <p>{props.post.imageUrl}</p>
      <p>{props.post.likes} Likes</p>
      <p>posted at {props.post.timestamp}</p>
      <div className='comments'>
      Comments
      {props.post.comments.map((comment, i) => {
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