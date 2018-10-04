import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      <PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
      <PostContent image={props.post.imageUrl} />
      <CommentSection comments={props.post.comments} likes={props.post.likes} />
    </div>
  );
}

export default PostContainer;
