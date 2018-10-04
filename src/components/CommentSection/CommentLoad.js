import React from 'react';
import './commentsection.css';

const CommentLoad = props => {
    return(
        <div>
            <div>{props.comments.text}</div>

            <div>{props.commentusers.username}</div>
        </div>
    )
}


export default CommentLoad