import React from 'react';

const CommentSection = props => {
    return (
<div>
    {props.comments.map(comment => {
        return (
            <div>
            <p key={this.username + this.text}>
            <span className="comment-user">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
            </p>
            </div>
        );
    })}
</div>
    );
}


export default CommentSection;