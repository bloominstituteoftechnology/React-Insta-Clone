import React from 'react';
import PostHeader from './PostHeader';
import './PostsContainer.css';
import CommentSection from '../CommentSection/CommentSectionContainer';
const Post = props => {
    return (
        <div className="post-container">
        <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
            <img
                alt="post thumbnail"
                className="post-image"
                src={props.post.imageUrl}
            />
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    );
};
export default Post;