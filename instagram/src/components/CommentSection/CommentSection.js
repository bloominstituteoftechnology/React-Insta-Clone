import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
    return (
        <>
        {props.comments.map(comment => (
            <div>
                <Comment user={comment.username}
                        text={comment.text}/>
            </div>
        ))}
            <input placeholder="Add a comment..."/>
        </>
    )
}

export default CommentSection;