import React from 'react';

const CommentSection = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                    <div className="comment" key={comment.text}>
                        <p>{comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default CommentSection;