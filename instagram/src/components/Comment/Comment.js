import React from 'react'

const Comment = (props) => {
    return (
        <div className="Comment">
            <h2>{props.comment.username}</h2>
            <p>{props.comment.text}</p>
        </div>

    )
}

export default Comment