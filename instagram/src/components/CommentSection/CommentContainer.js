import React from 'react';
import Comment from './Comment';
import shortid from 'shortid';

const CommentContainer = props => {
    return (
        <>
            {props.comments.map(comment => (
                <Comment comment={comment} key={shortid.generate()} />
            ))}
        </>
    );
};

export default CommentContainer;
