import React from 'react';

const Comment = props => {
    return (
        <p><span id="user">{props.u}</span> {props.t}</p>
    )
}

export default Comment;