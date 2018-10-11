import React from 'react';

const CommentSection = props => {
    return (
        <div>
            <h2>{props.comments.username}</h2>
            <h3>{props.comments.text}</h3>
        </div>
    )

}

export default CommentSection;