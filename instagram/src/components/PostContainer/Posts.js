import React from 'react';
import './Posts.css';
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentsContainer';

const Posts = props => {
    return (
        <div posts-border>
            <PostHeader 
                username={props.posts.username}
                thumbnailUrl={props.posts.thumbnailUrl}
                />
            <div className="posts-image-container">      
                <img 
                    alt="post thumbnail"
                    className="post-image"
                    src={props.posts.imageUrl}
                />
            </div>
            <CommentSection comments={props.posts.comments} />      
        </div>
    )
}

export default Posts;