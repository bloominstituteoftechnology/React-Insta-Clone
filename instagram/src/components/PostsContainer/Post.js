import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Posts.css';

const Post = props => {
  return (
    <div className="post">
      <PostHeader 
        username="props.post.username"
        thumbnailUrl="props.post.thumbnailUrl"
      />

      <div className="post-image">
        <img classname="post-image" src="{props.post.imageUrl}" alt="Thumbnail"/>
      </div>

      <CommentSection comments={props.post.comments}/>
    </div>
  );
};

export default Post;