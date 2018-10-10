import React from 'react';

const Comments = props => {
    return (
        (props.comments || []).map((comment, index) => {
            return (
                <div className="comment-content" key={index}>
                    <h3>{comment.username}</h3>
                    <p>{comment.text}</p>
                </div>
            )
        })
    );
}

export default Comments;