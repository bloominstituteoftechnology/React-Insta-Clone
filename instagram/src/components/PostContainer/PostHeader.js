import React from 'react';

const PostHeader = props => {
    return (
        <div class="post-header">
            <img class="user-thumbnail" src={props.thumbnail} />
            <p class="username">{props.username}</p>
        
        </div>
    );
}

export default PostHeader;