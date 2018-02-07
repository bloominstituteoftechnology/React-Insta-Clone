import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styles from './PostContainer.css'

const PostContainer = (props) => {
  return (
    <div className="wrapper">
      <div className="post">
        <div className="top">
          <img src={props.thumbnailUrl} className="thumbnail" />
          <div className="username">{props.username}</div>
        </div>
        <img src={props.imageUrl} className="image" />
        <div className="likes">{props.likes} {props.likes === 1 ? 'like' : 'likes'}</div>
        <CommentSection className="comments" comments={props.comments} />
      </div>
    </div>
  );
};

export default PostContainer;