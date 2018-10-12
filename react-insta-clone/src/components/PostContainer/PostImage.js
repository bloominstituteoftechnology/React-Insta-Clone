import React from 'react';
import './PostContainer.css';

const PostImage = (props) => {
    return (
        <img src={props.image} alt="post" />
    )
}

export default PostImage;