import React from 'react';
import Comment from '../CommentSection/Comment';
import styles from './commentsection.css';

const CommentSection = (props) =>{
    return(
        <div className = "comment-section">
            {props.comments.map(comment =>{
                return(
                    <Comment key = {comment.key} username = {comment.username} text = {comment.text} />
                )
            })}
        </div>
    )
}
export default CommentSection;