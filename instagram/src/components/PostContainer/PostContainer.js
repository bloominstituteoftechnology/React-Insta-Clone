import React from 'react';
import Post from './Post'

const PostContainer = props => {
  return (
    <div className='post-container'>
      {props.posts.map(post => {
        return <Post key={post.thumbnailUrl} post={post} />
      })}
    </div>
  )
}

export default PostContainer;
