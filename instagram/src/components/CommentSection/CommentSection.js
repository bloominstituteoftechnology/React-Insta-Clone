import React from 'react';
import Comment from './Comment'
import './Comment.css'

const CommentSection = props =>{    
    console.log(props.data.comments)
    return(
        <div className = "comment-container">
            {props.data.comments.map(data =>
            <Comment
                name = {data.username}
                comment = {data.text}
            />
            )}
            <div className = "time">
                {props.data.timestamp}
            </div>
        </div>
    )         
}

export default CommentSection