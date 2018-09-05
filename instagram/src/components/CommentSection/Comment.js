import React from 'react';

function Comment(props) {
    return(
        <div>
            <div>
                <h4>{props.comment.username}</h4>
                <p>{props.comment.text}</p>
            </div>
        </div>
    )};

export default Comment;