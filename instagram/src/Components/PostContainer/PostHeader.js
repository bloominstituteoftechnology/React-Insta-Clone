import React from 'react';

const PostHeader = ({thumbnail, username}) => {
    return (
        <div className="post-header">
            <img src={thumbnail} alt="thumbnail" className="post-thumbnail" />
            <h2>{username}</h2>
        </div>
    );
}

export default PostHeader;
