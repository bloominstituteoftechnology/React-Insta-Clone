import React from 'react';
import PostContainer from './PostContainer';
import dummyData from '../dummy-data';


const Post = props => {
  return (
    <div className='post-con'>
      {dummyData.map(post => (
      <PostContainer post={post} key={post.username}/>
      ))}
    </div>
  );
};



export default Post;

