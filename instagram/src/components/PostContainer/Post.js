import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props => {
  return (
    <div className = 'post-border'>
      <PostHeader username = {props.post.username} thumbnailUrl = {props.post.thumbnailUrl} />

      <div className = 'post-img-wrapper'>
        <img alt = 'Thumbnail' className = 'post-img' src = {props.post.imageUrl} />
      </div>

      <CommentSection comments = {props.post.comments} />
    </div> // post border
  );
};

export default Post;
