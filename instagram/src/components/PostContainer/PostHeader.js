import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div>
            <div className="postHeader">
                <img src="#" alt="profile"/>
                <h4>{props.item.username}</h4>
            </div>
            <div className="postimg"></div>
        </div>
    );
}

export default PostHeader;