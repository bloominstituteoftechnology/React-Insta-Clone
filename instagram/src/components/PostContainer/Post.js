import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import './Post.css';
import PostHeader from './PostHeader';
const Post = props => {
    return (
        <div className="post-header">
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
        <CommentSection
            postId={props.post.imageUrl}
            comments={props.post.comments}
        />
    </div>
    );
};

export default Post;