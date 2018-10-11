import React from 'react';

const LikePost = (props) => {
    return [
        <div className="like-section" key="likes-icons" onClick={props.increment}>
            <div className="icons-container">
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
        </div>,
        <div className="like-section" key="likes-container">
            <div className="likes">{props.likes}</div>
        </div>
    ]
}

export default LikePost;