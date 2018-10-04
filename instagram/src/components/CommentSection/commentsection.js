import React from 'react';
import Comment from '../CommentSection/Comment';
import styles from './commentsection.css';
import PropTypes from 'prop-types';

const CommentSection = (props) =>{
    return(
        <div className = "comment-section">
            {props.comments.map(comment =>{
                return(
                    <Comment key = {comment.key} username = {comment.username} text = {comment.text} />
                )
            })}
            <div className = "add-comment-section">
                <input 
                    className = "add-comment"
                    type ="text"
                    placeholder ="Add a comment..."
                />    
            </div>
        </div>
        
    )
}
CommentSection.propTypes = {
    comment:PropTypes.arrayOf(
        PropTypes.shape({
           username: PropTypes.string,
           text: PropTypes.string, 
    
        }) 
    )
}
export default CommentSection;