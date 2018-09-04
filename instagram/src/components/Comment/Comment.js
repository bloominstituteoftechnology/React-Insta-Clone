import React from 'react'
import "./Comment.css"
const Comment = (props) => {
    return (
        <div className="Comment">
            <p className="User">{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>

    )
}

export default Comment