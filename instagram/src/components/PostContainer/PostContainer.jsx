import React from 'react';
import Post from './Post';

const PostContainer = props => {
  return(
    <div className="post-container-wrapper">
     {props.data.map(post => <Post post={post} key={post.username} />)}
        
    </div>
  );
};

export default PostContainer;