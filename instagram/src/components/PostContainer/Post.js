import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

const Post = props => {
  return (
    <div className="post-border">
      <div className="post-header">
        <div className="post-thumb-wrapper">
          <img
            alt="post header"
            className="post-thumb"
            src={props.post.thumbnailUrl}
        />
        </div>
      <div>{props.post.username}</div>
    </div>
      
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
