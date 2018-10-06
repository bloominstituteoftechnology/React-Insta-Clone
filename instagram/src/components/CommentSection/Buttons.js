import React from 'react';
import './CommentSection.css';

const Buttons = (props) => {
    return (
        <div>
            <div className='action-buttons'>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <div className='likes'>{props.postData.likes} likes</div>
        </div>
    )
}

export default Buttons;