import React from 'react';
import './PostContainer.css'

const PostHeader = (props) => {
    return (
        <div className="post-header">
            <img src={props.thumbNail} alt="thumbnail" className="thumbnail"/>
            <h2 className="user-info">{props.username}</h2>
        </div>
    )
}

export default PostHeader;