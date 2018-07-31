import React from 'react';
import './posts.css';
import CommentSectionContainer from '../CommentSectionComp/CommentSectionContainer';

const Post = props => {
  return (
    <div className="post-container">
      <header className="post-header">
        <div className="post-header__img-container">
          <img src={props.userThumbnail} alt="user profile" className="post-header__img"/>
        </div>
        <div className="post-header__user-container">
          <p className="post-header__user">{props.username}</p>
        </div>
      </header>
      <div className="post-img-container">
        <img src={props.image} alt="post" className="post-img"/>
      </div>
      <CommentSectionContainer 
        comments={props.comments} 
        timestamp={props.timestamp}
        likes={props.likes}
      />
    </div>
  );
}

export default Post;