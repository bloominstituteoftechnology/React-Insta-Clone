import React from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import './CommentContainer.sass';

const CommentContainer = props => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => (
                <Comment comment={comment} key={shortid.generate()} />
            ))}
        </div>
    );
};

export default CommentContainer;
