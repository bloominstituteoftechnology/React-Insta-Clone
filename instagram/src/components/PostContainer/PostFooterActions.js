import React from 'react';
import './PostContainer.css'

const PostFooterActions = (props) => {
    return (
        <div className="post-footer-actions">
            <div className="post-actions-img">
                <img src={require("./heart-icon.png")} alt="like"/>
                <img src={require("./comment-icon.png")} alt="comment"/>
            </div>
            
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default PostFooterActions;