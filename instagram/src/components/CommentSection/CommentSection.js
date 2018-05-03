import React from 'react';
import './CommentSection.css';

const CommentSection = props => {

    return (
        <ul>
            {props.comments.map(i => {
                return (<li key={i.username + i.text}>
                {i.username} {i.text}
                </li>
            );
        })}
        </ul>
    );
};

export default CommentSection;