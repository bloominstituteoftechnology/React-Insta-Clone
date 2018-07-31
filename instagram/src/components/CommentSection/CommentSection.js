import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
            <form>
                <input type="text" placeholder="Add comment... " className="comment-input" />
            </form>
        </div>
    );
};

export default CommentSection;