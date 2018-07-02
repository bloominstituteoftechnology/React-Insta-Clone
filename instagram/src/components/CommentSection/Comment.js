import React from 'react'

const Comment = ({comment}) => (
    <div className="comment-container">
        <div className="comment-username">{comment.username}</div>
        <span className="comment-text">{comment.text}</span>
    </div>
)

export default Comment