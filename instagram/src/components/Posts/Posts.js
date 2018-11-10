import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './Posts.css';

const Posts = props => {
    return (
        <div className="posts">
            {props.data.map(post => (
                <PostContainer 
                    key={post.timestamp}
                    post={post}
                />
            ))}
        </div>        
    );
}

export default Posts;