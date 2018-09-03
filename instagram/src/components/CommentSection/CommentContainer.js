import React from 'react';
import './CommentSection.css'
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentContainer = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => <Comment key={comment.username + Math.floor(Math.random() * 100) + 1} data={comment}/>)}
            <CommentInput />
        </div>
    )
}

export default CommentContainer;