import React from 'react';
const Comment = props => {
    return (
        <>
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
        </>
    );
};

export default Comment;
