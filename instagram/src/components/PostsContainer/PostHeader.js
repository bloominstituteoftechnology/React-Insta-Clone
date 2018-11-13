import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.thumbnailUrl} alt="profile pic"/>
            <h2>{props.username}</h2>
        </div>
    )
}

export default PostHeader;