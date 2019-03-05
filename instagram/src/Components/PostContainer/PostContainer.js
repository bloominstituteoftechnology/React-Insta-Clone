import React from 'react';
import Post from './Post';
import './PostContainer.css';
import PostsPage from './PostsPage';

const PostContainer = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return (
          <div className='postContainer' key={i}>
            <Post post={post} />
            <PostsPage postPage={post} />
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;