import React from 'react';

const Comments = props => {
    return (
        <div className = 'comment-wrapper'>
            <h2>{props.comment.username}</h2>
            <h2>{props.comment.text}</h2>
        </div>
    )
}

export default Comments;
//`Comment` component with the username of the poster as well as the post's text.