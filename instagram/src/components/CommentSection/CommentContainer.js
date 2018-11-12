import React from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import './CommentContainer.sass';

const CommentContainer = props => {
    return (
        <div className="comment-container">
            <div className="comment--social-icons">
                <div className="icon-heart">
                    <span />
                </div>
                <div className="icon-comment">
                    <span />
                </div>
                <div className="icon-share">
                    <span />
                </div>
                <div className="icon-bookmark">
                    <span />
                </div>
            </div>
            {props.comments.map(comment => (
                <Comment comment={comment} key={shortid.generate()} />
            ))}
        </div>
    );
};

export default CommentContainer;
