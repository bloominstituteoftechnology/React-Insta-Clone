import React from 'react';

const Comment = props => {
    return (
        <div class="comment">
        <p class="comment-text">
            <span class="comment-user">{props.username} </span> 
            {props.text}
        </p>
        </div>
    );
}

export default Comment;