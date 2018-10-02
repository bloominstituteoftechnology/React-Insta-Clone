import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
        {props.postData.map(post => {
            return (
                <div className="post">
                    <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
                    <div className="post-img">
                        <img src={post.imageUrl} />
                    </div>
                </div>
            )
        })}
        </div>
    );
}
