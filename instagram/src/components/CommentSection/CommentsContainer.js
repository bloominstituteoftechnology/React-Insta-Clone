import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentAdder from './CommentAdder';

const CommentsContainer = (props) => {
    return (
        <div className='commentsContainer'>

        {props.comments.map((comment, id) => {
            return <Comment key = {Date.now()} comment = {comment}/>
        })
        }

        <CommentAdder />
        </div>
    );
}

export default CommentsContainer;