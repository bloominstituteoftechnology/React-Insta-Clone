import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer';
import PostHeader from './PostHeader';

const Post = props => {
    return (  
        <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
    );
}
 
export default Post;