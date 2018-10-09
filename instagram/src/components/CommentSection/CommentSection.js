import React from 'react';
import './CommentSectionStyles.css';

const CommentSection = props =>{
    return(
        props.comments.map((comment,index) => {
            return(
                <p key={index}><span className="comment-username">{comment.username}</span> {comment.text}</p>
            )
        })
    )
}

export default CommentSection;