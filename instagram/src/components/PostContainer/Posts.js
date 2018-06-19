import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

import './Posts.css';

const Post = props => {
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
      <CommentSection comments={props.post.comments} 
                      addComment={props.addComment} 
                      key={props.key}
                      index={props.index} 
                      commentTemplate={props.commentTemplate}
                      addCommentHandler={props.addCommentHandler} />
    </div>
  );
};

export default Post;
