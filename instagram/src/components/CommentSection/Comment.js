import React, { Component } from 'react';
import './CommentSection.css';

const Comment = props => {
    // console.log("PROPS in comment", props.comment.text)
    return (
        <div className={`comment ${props.comment.removed}`}>
            <p className='username-comment-section'>
            {props.comment.username} 
            {/* {props.c.username}  */}
            </p>
            <p className='text-comment-section'>
                {props.comment.text}
            </p>
            <i onClick={() => props.removeComment(props.comment.text)} className="fas fa-times"></i>
            {/* <i onClick={console.log('clicked icon')} className="fas fa-times"></i> */}
            {/* <i onClick={props.removeComment} className="fas fa-times"></i> */}
        </div>
    )
}

export default Comment

// <h1 
// onClick={() => props.changeComplete(props.propsItem.id)}
// className={`myTask ${props.propsItem.completed}`}
// >