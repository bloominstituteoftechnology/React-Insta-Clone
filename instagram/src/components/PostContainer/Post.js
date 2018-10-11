import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

import { StyledPostHeader, StyledPostImage } from './PostStyle';

import './PostContainerStyle/PostContainer.css';

const Post = props => {
  return (
    <StyledPostHeader>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <StyledPostImage>
        <img
          alt="post-thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </StyledPostImage>
      <CommentSection comments={props.post.comments} />
    </StyledPostHeader>
  );
};

export default Post;
