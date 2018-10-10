import React from 'react';
import './CommentSection.css';

const CommentHeader = props => {
    return (
        <div>
        <div className='comment-icon-bar'>
            <div className='left-icons'>
                <div className='icon heart' id='love' onClick={props.addLike}></div>
                <div className='icon' id='bubble'></div>
                <div className='icon' id='upload'></div>
            </div>
            <div className='right-icons'>
                <div className='icon' id='save'></div>
            </div>
        </div>

        <div className='likes'>
        {props.likes} likes
        </div>

        </div>
    )
}

export default CommentHeader;


