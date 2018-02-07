import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div className="post">
      <div className="post__user">
        <img className="post__user-thumbnail" src={props.post.thumbnailUrl} alt="alt text" />
        <div className="post__user-username">{props.post.username}</div>
      </div>
      <img className="post__picture" src={props.post.imageUrl} alt="alt text" />
      <div className="post__likes">{props.post.likes} likes</div>
      <CommentSection  comments={props.post.comments} />
      <div className="post__timestamp">{props.post.timestamp}</div>
    </div>
  );
}

export default PostContainer;