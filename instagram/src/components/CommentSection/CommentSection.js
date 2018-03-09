import React from 'react';
import './CommentSection.css';

export const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(((comment, index) => {
                return (
                    <div className="CommentSection" key={comment.username + index}>
                        <span className="CommentSection__comment">{comment.username}</span> {comment.text}
                    </div>
                )
            }))}
        </div>
    )
};