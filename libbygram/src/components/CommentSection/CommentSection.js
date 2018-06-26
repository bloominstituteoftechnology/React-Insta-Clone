import React from 'react';

const CommentSection = props => {
    return (
<div>
    {props.comments.map(i => {
        return (
            <div>
            <p key={i.username + i.text}>
            <span className="comment-user">{i.username}</span>
            <span className="comment-text">{i.text}</span>
            </p>
            </div>
        );
    })}
</div>
    );
}


export default CommentSection;