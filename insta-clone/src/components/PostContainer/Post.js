import React from 'react';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
            <img src={props.post.imageUrl} alt="post-image" className="post-image" />
            </div>
        
        
        </div>
    );
};

export default Post;