import React from 'react';
import './posts.css';

import CommentSection from './../CommentComponents/CommentSection';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return(
    <div className="post-container">
      <PostHeader thumbnail={props.post.thumbnailUrl} user={props.post.username} />
      <div className="post-image"><img alt="post image" src={props.post.imageUrl} /></div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;
