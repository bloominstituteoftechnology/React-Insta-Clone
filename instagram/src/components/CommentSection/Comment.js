import React from 'react';

const Comment = props => {
    return (
        <div className="comment" id={props.id}>
        <p className="comment-text">
            <span className="comment-user">{props.username} </span> 
            {props.text}
        </p>
        <span className="remove-comment" onClick={props.removeComment}>x</span>
        </div>
    );
}

export default Comment;