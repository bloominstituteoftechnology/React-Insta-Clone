import React, { Component } from 'react';
import './CommentSection.css';

const Comment = props => {
    // console.log("PROPS in comment", props)
    return (
        <div className='comment'>
            <p className='username-comment-section'>
            {props.comment.username} 
            {/* {props.c.username}  */}
            </p>
            <p className='text-comment-section'>
                {props.comment.text}
            </p>
        </div>
    )
}

export default Comment