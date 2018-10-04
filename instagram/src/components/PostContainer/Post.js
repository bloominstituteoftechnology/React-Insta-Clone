import React from 'react';
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

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img
        className='thumbnail'
        src={props.thumbnailUrl}
      />
      <div>
        <div>{props.username}</div>
      </div>
    </div>
  )
}

export default Post;
