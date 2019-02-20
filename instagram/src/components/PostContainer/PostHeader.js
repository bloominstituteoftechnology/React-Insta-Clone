import React from 'react';
import './Posts.css';

const PostHeader = props => {
    return (
        <div className="post-header">
        <div className="user-thumbnail-container">
            <img
            alt="posts header"
            className="posts-thumbnail"
            src={props.thumbnailUrl}
            />
        </div>
        <div className="username">{props.username}</div>
        </div>
    );
};

export default PostHeader;