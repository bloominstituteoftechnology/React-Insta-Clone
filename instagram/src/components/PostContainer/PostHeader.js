import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className='post-header-container'>
            <div>
                <img src={props.thumbnailUrl} />
            </div>
            <p>{props.username}</p>
        </div>
    );
}

export default PostHeader;