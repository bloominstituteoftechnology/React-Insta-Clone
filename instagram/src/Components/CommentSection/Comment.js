import React from 'react';

const Comment = (props) => {
    return (
        <div>
            <p><span>{props.comment.username}</span>{props.comment.text}</p>
        </div>
    );
};

export default Comment;