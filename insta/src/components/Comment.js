import React from 'react';

const Comment = props => {
    return (
        <>
            <p><span style={{fontWeight: "bold"}}>{props.comment.username}</span> {props.comment.text}</p>
        </>
    );
};

export default Comment;