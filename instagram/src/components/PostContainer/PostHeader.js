import React from 'react';
import './PostContainer.css'

function PostHeader(props) {
    return (
        <div className="post-header">
            <img src={props.thumbImg} alt="user thumbnail" />
            <p>{props.userN}</p>
        </div>
    )
}

export default PostHeader;