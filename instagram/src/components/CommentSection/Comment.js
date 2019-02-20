import React from 'react';

const Comment  = props => {
    return(
        <div>
            <span>{props.username} </span>
            <span>{props.text}</span>
        </div>
    )
}

export default Comment;