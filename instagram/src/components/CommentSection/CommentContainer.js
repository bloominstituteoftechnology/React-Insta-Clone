import React from 'react';
import Comment from './Comment';

const CommentContainer = props => {
    return (
        <>
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </>
    );
};

export default CommentContainer;
