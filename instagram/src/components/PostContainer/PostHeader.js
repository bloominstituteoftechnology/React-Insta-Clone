import React from 'react';
import './Posts.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img alt="user-thumbnail" 
                 className="user-picture" 
                 src={props.thumbnailUrl}>
            </img>
            <h4>
                {props.username}
            </h4>
        </div>
    )
}

export default PostHeader;