import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  console.log(props.postData);

  return (
    <div className="post-container">
      <div className="post-header-container">
        <img src={props.postData.thumbnailUrl} />
        <div className="username">{props.postData.username}</div>
      </div>
      <img src={props.postData.imageUrl} />
      <div className="post-icons-and-comments-container">
        <div className="post-icons-container">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <p>{props.postData.likes} likes</p>
        <CommentSection comments={props.postData.comments}
                        timestamp={props.postData.timestamp} />
      </div>
    </div>
  );
};

export default PostContainer;
