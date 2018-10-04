import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import PostContainerImg from './PostContainerImg';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="post-container">
      <PostContainerHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
      <PostContainerImg image={props.post.imageUrl} />
      <CommentSection comments={props.post.comments} />
    </div>
  );
}

export default PostContainer;
