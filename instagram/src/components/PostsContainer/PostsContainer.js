import React from 'react';
import PostContent from './PostContent'
import './post-container.css';

const PostContainer= props =>{
    return (
        <div className="posts-container-wrapper">
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
        
    );
}

export default PostContainer;