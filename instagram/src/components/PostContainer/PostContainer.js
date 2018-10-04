import React from 'react';

const PostContainer = props => {
  return (
    <div className=post-container>
      {props.posts.map(post => {
        <Post key={post.thumbnailUrl} post={post} />
      })}
    </div>
  )
}

export default PostContainer;
