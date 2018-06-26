import React from 'react';
import PostContent from './PostContent'
import './post-container.css';

const PostContainer= props =>{
    return (
        <div className="post-container">
            <span>Post Container</span>
            {props.posts.map(post => <PostContent key={post.imageUrl} post={post}
                />)}
        </div>
    );
}

export default PostContainer;