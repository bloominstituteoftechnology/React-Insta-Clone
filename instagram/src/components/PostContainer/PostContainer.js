import React from 'react';
import CommentSection from './../CommentSection/CommentSection';
import './post.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.data.thumbnailUrl} alt="" />
        <h2 className="user-name">{props.data.username}</h2>
      </div>

      <div className="post-content">
        <img src={props.data.imageUrl} alt="" />
      </div>

      <div className="likes-container">
        <div>
          <img onClick={() => props.like(props.data.timestamp)} src={require('../images/favourite-heart-lrg.png')} alt="" />
          <img src={require('../images/speech-bubble.png')} alt="" />
        </div>
        <p>{props.data.likes} likes</p>
      </div>

      <CommentSection comments={props.data.comments} />
    </div>
  )
}

export default PostContainer;