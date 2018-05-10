import React from 'react';
import "./CommentSectionStyle.css";

export const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => {
                return (
                    <p className='comment'><strong>{comment.username}</strong> {comment.text}</p>
                )
            })}
        </div>
    )
};