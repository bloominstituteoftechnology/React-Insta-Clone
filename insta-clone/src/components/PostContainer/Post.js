import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
            <img src={props.post.imageUrl} alt="post-content" className="post-image" />
            </div>
            <CommentSection 
            comments={props.post.comments} 
            likes={props.post.likes}
            />
        </div>
    );
};

export default Post;