import React from 'react';
import './PostContainer.css';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="post--container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post--img">
        <img src={props.post.imageUrl} alt=""/>
      </div>
      <CommentSection
        username={props.post.username}
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
      />
    </div>
  );
}

export default PostContainer;