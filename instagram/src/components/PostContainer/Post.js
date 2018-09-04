import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

import './postContainer.css';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img 
                src={props.post.imageUrl} 
                alt="post thumbnail"
                className="post-image"
                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;