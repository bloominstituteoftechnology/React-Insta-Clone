import React from 'react';
// import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
    </div>
  );
};

export default PostContainer;