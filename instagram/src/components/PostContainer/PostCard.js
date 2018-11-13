import React from 'react'
import CommentCard from '../CommentSection/CommentCard';

const PostCard = props => {
  // console.log("POSTCARD PROPS",typeof props.likes);
  // console.log("POSTCARD PROPS DATA", props.addLike);
  
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
      <div 
        className="social-container"
        key="socialContainer"
        >
        <i 
          className="far fa-heart"
          id={props.id}
          likes={parseInt(props.likes, 10)}
          onClick={props.addLike}
        ></i>
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
