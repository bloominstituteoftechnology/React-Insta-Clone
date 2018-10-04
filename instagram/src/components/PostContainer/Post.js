import React from 'react';

const Post = props => {
  return (
    <div className='post'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
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
