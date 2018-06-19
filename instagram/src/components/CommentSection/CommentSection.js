import React from 'react';
import './CommentSection.css';
import Comment from './Comment';



const CommentSection = props => {
    return (
        <div>
        {props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
        })}
        </div>
    )
};

export default CommentSection;