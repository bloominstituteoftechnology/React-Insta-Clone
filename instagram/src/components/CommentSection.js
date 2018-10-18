import React from 'react';
import './CommentSection.css';

 const CommentSection = (props) => {
    return (
        <div className= "comments-section-wrapper-main">
            {props.comments.map(comment => {
                return (
                    <div className= "comments-section-wrapper">
                        <p><b>{comment.username}</b></p>
                        <p className= "comment-text">{comment.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection;