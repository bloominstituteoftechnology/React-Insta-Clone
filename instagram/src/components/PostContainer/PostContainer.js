import React from 'react';
import Post from './Post';
import './Post.css';

const PostContainer = props => {
    return (
        <div className="post-container-container">
            {props.posts.map(post => 
                <Post 
                    key={post.id} post={post}
                />
            )}
        </div>

    );
};

export default PostContainer;