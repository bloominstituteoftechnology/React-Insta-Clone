import React from 'react';

function Comment(props) {
    return <div><a href="#">{props.comment.username} </a>{props.comment.text}</div>;
}

export default Comment;