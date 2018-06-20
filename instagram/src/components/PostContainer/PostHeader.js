import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="thumbnail">
                <img alt="profile" className="profile-picture" src={props.thumbnailUrl} />
            </div>
            <div className="username">
                <p>{props.username}</p>
            </div>
        </div>
    );
};

export default PostHeader;