import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className='post-header'>
        <div className='post-thumb-wrap'>

        <img
        alt='post header'
        classNme='post-thumb'
        src={props.thumbnailUrl}
        />
        </div>
        <div>{props.username}</div>
        </div>
    )
}

export default PostHeader;