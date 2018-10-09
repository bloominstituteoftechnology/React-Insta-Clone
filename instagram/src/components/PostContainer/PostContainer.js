import React from 'react';
import Post from './Post';

const PostContainer = (props, index) => {
  
  return (
    <div>
      {props.posts.map(post => 
        <Post {post.likes} />)}
      
    </div>
  )
}
export default PostContainer;