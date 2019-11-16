import React from 'react';
import './PostStyles.css'

const Likes = props => {
    return (
        <div className="like-section">
            <div className="icons">
                <i className="far fa-heart" onClick={props.addLike}></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="likes">{props.likes} likes</div>
        </div>
    )
}

export default Likes