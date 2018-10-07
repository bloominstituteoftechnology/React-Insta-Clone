import React from 'react';

const PostContainer = props => {
    return (
        <div>
            <h2>{props.item.username}</h2>
            <h2>{props.item.likes}</h2>
        </div>
    );
}

export default PostContainer;