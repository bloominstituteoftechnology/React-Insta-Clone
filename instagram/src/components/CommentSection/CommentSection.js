import React from 'react';
import './CommentSection.css';

export const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(((comment, index) => {
                return (
                    <div key={comment.username + index}>
                        <span>{comment.username} {comment.text}</span>
                    </div>
                )
            }))}
        </div>
    )
};