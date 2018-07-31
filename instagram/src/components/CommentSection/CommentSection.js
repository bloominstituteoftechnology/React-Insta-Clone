import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </div>
    );
};

export default CommentSection;