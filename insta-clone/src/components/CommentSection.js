import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <div className="comments">
                    <p className="username">{comment.username}</p>
                    <p className="comment">{comment.text}</p>
                </div>
            )) }
            <form><input className="add-comment" type="text" placeholder="Add a comment..." /></form>

        </div>
    )
}

export default CommentSection;