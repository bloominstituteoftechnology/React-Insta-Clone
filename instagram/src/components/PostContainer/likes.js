import React from 'react';
import './PostContainer.css';

const Likes = props =>{
    return (
        <div className="social-icons">
            <div className="post-icons">
                <div onClick={props.incrementLikes}className="heart"></div>
                <div className="chat"></div>
            </div>
            <div className="likes">
                <div className="likes-container">
                    {props.likes} likes
                </div>
            </div>
        </div>
    )
}

export default Likes;