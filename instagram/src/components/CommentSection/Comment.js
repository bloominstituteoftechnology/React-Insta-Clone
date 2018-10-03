import React from 'react';

const Comment = (props) => {
    return (
        <>
            <p>{props.user}</p>
            <p>{props.text}</p>
        </>
    )
}

export default Comment;