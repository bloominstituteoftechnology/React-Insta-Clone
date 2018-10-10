import React from 'react';
import PostContainer from '../PostContainer/PostContainer'

const PostList = (props) => {
  return (
    <div className='postList'>
      {props.posts.map (post => {
        return <PostContainer
          key={post.created}
          user={post} />
      })}
    </div>
  )
}

export default PostList;