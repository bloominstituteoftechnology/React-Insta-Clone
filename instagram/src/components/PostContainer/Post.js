import React from 'react';
import PostHeader from './PostHeader.js'
import CommentSection from '../CommentSection/CommentSection.js';

const Post = props => {
  return (
    <div className='post'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img
          className='post-img'
          src={props.post.imageUrl}
          alt='post img'
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default Post;
