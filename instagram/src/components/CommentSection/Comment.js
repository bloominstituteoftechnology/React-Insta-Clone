import React, { Component } from 'react';
import './CommentSection.css';
import Username from '../Styles/Styles';

const Comment = props => {
    // console.log("PROPS in comment", props.comment.text)
    return (
        <div className={`comment ${props.comment.removed}`}>
            <Username>
                {props.comment.username} 
            </Username>
            <p className='text-comment-section'>
                {props.comment.text}
            </p>
            <i onClick={() => props.removeComment(props.comment.text)} className="fas fa-times"></i>
        </div>
    )
}

export default Comment