import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
        <p className="comment-text">
            <span className="comment-user">{props.username} </span> 
            {props.text}
        </p>
        </div>
    );
}

export default Comment;