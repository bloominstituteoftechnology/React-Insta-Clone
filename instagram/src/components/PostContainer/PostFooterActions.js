import React from 'react';
import './PostContainer.css'

const PostFooterActions = (props) => {
    return (
        <div className="post-footer-actions">
            <div className="post-actions-img">
                <p>IMG</p>
                <p>IMG</p>
            </div>
            
            <p>{props.likes} likes</p>
        </div>
    )
}

export default PostFooterActions;