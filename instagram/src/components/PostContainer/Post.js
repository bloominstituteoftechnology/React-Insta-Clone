import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import './Posts.css';

const Post = props => {
    return (
        <div className="post-border">
        <PostHeader
        username={props.post.username}
        thubnailUrl={props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
        <img
        className="post-image"
        src={props.post.imageUrl}
        alt="post-thumbnail"
        />
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;

