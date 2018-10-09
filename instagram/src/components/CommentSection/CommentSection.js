import React from 'react';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <h1>{props.likes}</h1>
            {props.comments.map((comment) => {
                return (
                    <div className="comment-content">
                        <h1>{comment.username}</h1>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CommentSection;