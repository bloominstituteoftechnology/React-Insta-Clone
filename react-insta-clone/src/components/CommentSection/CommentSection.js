import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className='comment-section'>
            <div className="comment-user">
                {props.comment.username}      
            </div>     
            <div className="comment-text">
                {props.comment.text}
            </div>
        </div>
    )
}

export default CommentSection;