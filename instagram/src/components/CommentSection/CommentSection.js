import React from 'react';
import './commentSection.scss';

const CommentSection = props => {
    return (
        <p className='commentContent'>
            <span className='commentUsername'>{props.comment.username}</span>
            {props.comment.text}
        </p>
    )
}

export default CommentSection;