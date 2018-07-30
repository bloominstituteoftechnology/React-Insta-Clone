import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className='post-container'>
             {props.posts.map(post => (
                 <div>
                {post.username}
                </div>
             ))}
        </div>
    );
};

export default PostContainer;