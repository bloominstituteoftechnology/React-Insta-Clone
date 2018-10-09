import React from 'react';
import Post from './Post';

const PostContainer = (props, index) => {
  
  return (
    <div>
      {props.posts.map(post => 
        <Post key={index} post={post} />)}
      
    </div>
  )
}
export default PostContainer;