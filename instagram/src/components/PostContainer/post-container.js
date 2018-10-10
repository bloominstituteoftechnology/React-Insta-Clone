import React from 'react';
import Post from './Post';


 const PostsContainer = (props) => {
    return (
        <div className="posts-container-wrapper">
        {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
      </div>
    );
};

export default PostsContainer;
