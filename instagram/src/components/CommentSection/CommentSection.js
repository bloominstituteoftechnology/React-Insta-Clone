import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map((comment, index) => (
                <div key={comment.username + index} className="comment">
                    <div className="comment-user">
                        {comment.username}
                    </div>
                    <div className="comment-text">
                        {comment.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentSection