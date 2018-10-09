import React from 'react'
import './CommentSection'

const Comments = props => {
    return (
        <div className="comments">
            <div className="user-name">
                {props.comments.username}
            </div>
            <div className="text">
                {props.comments.text}
            </div>
        </div>
    )
}

export default Comments