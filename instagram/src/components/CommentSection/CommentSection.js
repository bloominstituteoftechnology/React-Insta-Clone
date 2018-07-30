import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div className="comments">
            {props.comments.map(comment =>
            <Comment key={props.time} user={comment.username} text={comment.text} />)
            }
        </div>
    );
};

export default CommentSection;