import React from 'react';
import './Post.css';

const PostHeader = props => {
    return (
        <div className = 'post-header'>
        <div className = 'post-header-thumbnail'>
        <img src = {props.thumbnailUrl} alt='post header'></img>
        </div>
        <div className = 'post-header-username'>
        {props.username}
        </div>
        
        </div>
    )
}

export default PostHeader;