import React from 'react';
import './comment.css';

function CommentSection(props){
    return (
        <div className='each-comment-container'>
            <span className='username-comment'>{props.com.username} </span> 
            <span className='user-comment'>{props.com.text}</span> 
        </div>
    );
}

export default CommentSection;