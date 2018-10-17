import React from 'react';
import './CommentSection.css';

 const CommentSection = (props) => {
    return (
        <div className= "comments-section-wrapper">
            {props.comments.map(comment => {
                return (
                    <div>
                        <h4>{comment.username}</h4>
                        <span>
                        <p>{comment.text}</p>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection; 
