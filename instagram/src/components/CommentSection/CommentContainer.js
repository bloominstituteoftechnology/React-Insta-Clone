import React from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import './CommentContainer.sass';

const CommentContainer = props => {
    return (
        <div className="comment-container">
            <div className="comment--social-icons">
                <span className="icon-heart" />
                <span className="icon-comment" />
                <span className="icon-share" />
                <span className="icon-bookmark" />
            </div>
            {props.comments.map(comment => (
                <Comment comment={comment} key={shortid.generate()} />
            ))}
        </div>
    );
};

export default CommentContainer;
