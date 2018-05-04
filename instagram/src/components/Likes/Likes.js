import React from 'react';
import "./Likes.css";

const Likes = props => {
    return (
        <div>
            <div className="icons">
                <i className='fa fa-heart fa-lg'></i>
                <i className='fa fa-comment fa-lg'></i>
            </div>
            <span className="likes">{props.likeNum} likes</span>
        </div>
    )
}

export default Likes;