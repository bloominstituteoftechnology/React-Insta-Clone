import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

const CommentContainer = ({comments}) => {
    return (
        <div className="comment-container">
            {comments.map((comment, i) => <Comment info={comment} key={i}/>)}
        </div>
    );
}

export default CommentContainer;
