import React from 'react';

const Comment = props => {
    console.log(props);
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment;

