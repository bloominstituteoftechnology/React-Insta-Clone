import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <header className="PostContainer-Header">
        <img src={props.data.thumbnailUrl} alt="User" />
        {props.data.username}
      </header>
      <div className="PostContainer-Img-Container">
        <img src={props.data.imageUrl} alt="Image" />
      </div>
      <div className="PostContainer-Icons">
        <ion-icon name="heart-empty" />
        <ion-icon name="chatbubbles" />
      </div>
      <div className="PostContainer-Likes">{props.data.likes} likes</div>
      <CommentSection comments={props.data} />
    </div>
  );
};

export default PostContainer;
