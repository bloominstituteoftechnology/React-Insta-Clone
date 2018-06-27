import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return(
    <div className="post-container">
      <div className="header-bar">
        <img className="profile-img"
          src={props.item.thumbnailUrl}
          alt="Usr"
        />
        <h2>{props.item.username}</h2>
      </div>
      <img
        className="post-img"
        src={props.item.imageUrl}
      />
      <div className="footer">
        <h2>{props.item.likes} likes</h2>
        <CommentSection comments={props.item.comments} />
      </div>
    </div>
  )
}

export default PostContainer;
