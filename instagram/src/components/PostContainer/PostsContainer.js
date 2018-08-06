import React from 'react';
import Post from './Post';


const PostContainer = props => {
    return (
      <div className="posts-container">
        {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
      </div>
    );
};


export default PostContainer;