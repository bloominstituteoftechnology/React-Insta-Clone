import React from 'react';


const Comment = props => {
    return   (
        <div><strong>{props.c.username}</strong> {props.c.text}</div>
    )     
}

export default Comment;