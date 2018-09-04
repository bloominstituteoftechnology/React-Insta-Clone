import React from 'react';
import './postContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-wrapper">
                <img 
                src={props.thumbnailUrl} 
                alt="post header"
                className="post-thumb"
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

export default PostHeader;