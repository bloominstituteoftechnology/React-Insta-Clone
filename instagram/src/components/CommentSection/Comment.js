import React from 'react';
import './comment.css';

const Comment = (props) => {
    return (
        <div className = "comment-div">  
            <h5> {props.localComment.username} </h5>
             <p> {props.localComment.text} </p>
        </div>
    )
};

export default Comment;