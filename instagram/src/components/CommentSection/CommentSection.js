import React from 'react';
import './commentSection.scss';

const CommentSection = props => {
    console.log(props)
    return (
        <p><span>{props.comment.username}</span>{props.comment.text}</p>
    )
}

export default CommentSection;