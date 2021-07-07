import React from 'react';
import "./CommentSection.css";


const Comment = props => {
    return (
        <div className='comments'> 
            <p><span>{props.comment.username}</span>{props.comment.text}</p> 
        </div>
    )
}


export default Comment;