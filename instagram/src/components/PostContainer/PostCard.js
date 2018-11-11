import React from 'react'
import CommentCard from '../CommentSection/CommentCard';

const PostCard = props => {
  
  return (
    <div className="post-card">
      <div className="post-card__header">
        <img className="post-avatar" src={props.data.thumbnailUrl} alt="user avatar" />
        <p>{props.data.username}</p>
      </div>
      <img className="post-card__img" src={props.data.imageUrl} alt="user post" />
      <div className="social-container">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <p>{props.data.likes} likes</p>
      <CommentCard comments={props.data.comments}/>
      <p className="timestamp" >{props.data.timestamp}</p>
      <input
        value={props.value}
        name="comment"
        type="text"
        className="add-comment fas fa-ellipses-h"
        onChange={props.handleChange}
        placeholder="Add a comment..."
      />
      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}

export default PostCard
