import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-wrapper">
                <img src={props.thumbnailUrl} alt="post header" className="post-thumb" />
            </div>
            <div className="user-name">
                <p>{props.username}</p>
            </div>
        </div>
    );
};

export default PostHeader;