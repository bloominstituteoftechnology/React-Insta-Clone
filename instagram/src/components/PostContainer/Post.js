import React from 'react';
import './PostContainer.css';

const Post = (props) => {
    return (
        <div>{props.postData.username}</div>
    )
}

export default Post;