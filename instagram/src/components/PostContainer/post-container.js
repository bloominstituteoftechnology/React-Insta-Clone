import React from 'react';
import CommentSection from '../CommentSection/comment-section'
import './post-container.css'

function PostContainer(props) {
  // console.log(props.username);
  return (
    <div className='post-container'>
      <img src={props.post.thumbnailUrl} className='thumbnail'/>
      <p>{props.post.username}</p>
      <img src={props.post.imageUrl} className='image'/>
      <p>{props.post.likes} Likes</p>
      <p>posted at {props.post.timestamp}</p>
      <div className='comments'>
      <h5>Comments</h5>
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