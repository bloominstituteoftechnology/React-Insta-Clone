import React from 'react';

const PostHeader = props => {
    return (
        <div className = "post-header">
            <img src =  {props.post.thumbnailUrl} alt = "" /> 
            Username: {props.post.username}
        </div>
        )
    };


export default PostHeader;