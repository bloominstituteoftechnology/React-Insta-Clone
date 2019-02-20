import React from 'react';
import './Posts.css';
import Posts from './Posts';


const PostContainer = props => {
    return (
        <div className="posts-container">
        {props.posts.map(p => <Posts key={p.imageUrl} posts={p} />)}
        </div>
    );
};

export default PostContainer;