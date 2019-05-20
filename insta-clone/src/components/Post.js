//post
import React from 'react';
import CommentSection from './CommentSection';
import PostHeader from './PostHeader.js';
import Likes from './Likes.js';

const Post = props => {
  return (
    <div className="header">
        <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />
    <div className="post">
      <img
      alt="picture"
      src={props.post.imageUrl}
      />
    </div>
      <Likes like={props.post.likes} />
      <CommentSection comments={props.post.comments}/>
    </div>
  )
}

export default Post;
