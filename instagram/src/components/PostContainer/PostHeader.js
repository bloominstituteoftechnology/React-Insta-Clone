import React from 'react';

let PostHeader = props => {
    return (
        <div className='postHeader'>
            <img className='thumbnail' alt={props.post.username} src={props.post.thumbnailUrl} />
            <h2 className="username">{props.post.username}</h2>
        </div>
    )
}

export default PostHeader;