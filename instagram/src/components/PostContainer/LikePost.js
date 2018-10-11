import React from 'react';

const LikePost = () => {
    return [
        <div className="like-section" key="likes-icons">
            <div className="icons-container">
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
        </div>,
        <div className="like-section" key="likes-container">
            <div className="likes">93,430,972</div>
        </div>
    ]
}

export default LikePost;