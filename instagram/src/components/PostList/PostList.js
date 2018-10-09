import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

import './PostList.css';


const PostList = props => (
  <div className='post-list'>
    Post List!!
    {props.posts.map(post => <PostContainer post={post} />)}
  </div>
);



export default PostList;