import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className='postHeader'>
            <img  src={props.thumbnailUrl}/>
            <p>{props.username}</p>
        </div>
    );
};

export default PostHeader;