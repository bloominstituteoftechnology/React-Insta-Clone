import React from 'react'
import CommentCard from '../CommentSection/CommentCard';

const PostCard = props => {
  console.log("POSTCARD PROPS", props);
  
  return (
    <div className="post-card">
      <div className="post-card__header">
        <img
          className="post-avatar"
          src={props.data.thumbnailUrl}
          alt="user avatar"
        />
        <p>{props.data.username}</p>
      </div>
      <img 
        className="post-card__img"
        src={props.data.imageUrl}
        alt="user post"
      />
      <div className="social-container">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <p>{props.data.likes} likes</p>
      <CommentCard 
        id={props.id}
        comments={props.data.comments}
        timestamp={props.data.timestamp}
      />
    </div>
  )
}

export default PostCard
