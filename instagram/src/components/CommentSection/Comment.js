import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className= "usertext">
            <span className= "username">
                {props.comment.username} {" "}
            </span>
            <span>
                {props.comment.text}
            </span>
        </div>
    )
}
 
export default Comment;