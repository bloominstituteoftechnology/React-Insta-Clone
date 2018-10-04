import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js'

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map((comment) => {
                return (
                    <Comment comment={comment} key={Math.random()} />
                )
            })}
        </div>
    )
}

export default CommentSection;