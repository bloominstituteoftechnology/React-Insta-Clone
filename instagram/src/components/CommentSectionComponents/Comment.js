import React from 'react';
import './CommentSection.css';

const CommentComment=(props)=> {
    return (
        <div className='comment'>
           <span className='comment-body'>{props.comment.text}</span>{''}
           <span className='commenter-name'>{props.comment.username}</span>
        </div>
    );
};

export default CommentComment;