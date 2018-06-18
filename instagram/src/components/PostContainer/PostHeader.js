import React from 'react';
import './Post.css';

const PostHeader = (props) => {
    return (
    <div className='post-header-container'>
        <img src = {props.thumbnail} className = 'thumbnail' alt = 'thumbnail'/>
        <h2 className = 'username'>{props.username}</h2>
    </div>
    );
}

export default PostHeader;