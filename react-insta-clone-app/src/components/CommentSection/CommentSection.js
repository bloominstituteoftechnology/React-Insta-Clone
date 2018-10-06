import React from 'react';
import './CommentSection.css';


export default function CommentSection(props){
    return (
        <div className='individual-comment'>
                <span className='comment-username'>{props.commentUsername}</span>
                <span className='comment-text'>{props.commentText}</span>
        </div>
    );
}