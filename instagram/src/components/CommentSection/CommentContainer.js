import React from 'react';
import './CommentSection.css'
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentContainer = (props) => {
    return (
        <div>
            {props.comments.map(comment => <Comment key={comment.username} data={comment}/>)}
            <CommentInput />
        </div>
    )
}

export default CommentContainer;