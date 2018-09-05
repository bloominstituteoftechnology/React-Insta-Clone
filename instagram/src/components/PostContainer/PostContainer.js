import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div> 
      {this.state.posts.map(post => { return (<Post post={post} key={post.timestamp}/>)})}
    </div>
  );
};

export default PostsContainer;