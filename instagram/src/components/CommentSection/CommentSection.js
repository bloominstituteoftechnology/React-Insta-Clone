import React from 'react';
import Comment from './comment';
import './commentsection.css'

let CommentSection = props => {
    return (
        <div className="comments">
            {props.comments.map((comment, i) => <Comment comment={comment}/>)}
        </div>
    )
}

export default CommentSection;