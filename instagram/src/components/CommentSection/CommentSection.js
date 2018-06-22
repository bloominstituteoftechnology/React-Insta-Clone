import React from 'react';
import './CommentSection.css';
import Comment from './Comment';



const CommentSection = props => {
    return (
        <div>
        {props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} /> // Iterating over messages and usernames of comments array that is an object
        })}
        </div>
    )
};

export default CommentSection;