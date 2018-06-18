import React from 'react';

const CommentSection = props => {
    return (
        <div className="comment-container">
            <div>{props.username}</div>
            <div>{props.text}</div>
        </div>
    );
};

export default CommentSection;