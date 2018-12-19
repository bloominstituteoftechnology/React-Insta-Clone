import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.comment.map(comment => (
                <div className = 'comments'>
                    <p><b className = 'username'>{comment.username}</b>{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;