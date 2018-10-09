import React from 'react';

const Comments = props => {
    return (
        props.comments.map((comment) => {
            return (
                <div className="comment-content">
                    <h3>{comment.username}</h3>
                    <p>{comment.text}</p>
                </div>
            )
        })
    );
}

export default Comments;