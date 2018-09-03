import React from 'react';
import './PostContainer.css'

const PostHeader = (props) => {
    return (
        <div className="post-header">
            <img src={props.thumbImg} alt="user image" />
            <p>{props.userN}</p>
        </div>
    )
}

export default PostHeader;