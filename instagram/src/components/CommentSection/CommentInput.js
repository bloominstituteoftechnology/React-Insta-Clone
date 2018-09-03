import React from 'react';
import './CommentSection.css'

const CommentInput = () => {
    return (
        <div className="comment-input">
            <input type="input" placeholder="Add a comment..."/>
            <img src={require("./comment-dots.png")} alt="comment dots"/>
        </div>
    )
}

export default CommentInput;