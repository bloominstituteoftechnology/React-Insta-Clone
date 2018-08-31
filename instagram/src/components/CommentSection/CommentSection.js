import React from 'react';
import './commentSection.css';
import Comment from './Comment';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => <Comment comment={comment}/>)}
        </div>
    )
}

export default CommentSection;