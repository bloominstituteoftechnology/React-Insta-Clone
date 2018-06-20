import React from 'react'
import Comment from './Comment'
import './CommentSection.css';

function CommentSection (props) {

    return (
        <div className="comment-section">
            {props.comments.map((comment) => {
                let id = comment.username + Date.now() + Math.random();
                return (
                    <Comment key={comment.id} id={comment.id} comment={comment} handleCommentDelete={props.handleCommentDelete} />
                );
            })
            }
        </div>
    );
}

export default CommentSection;