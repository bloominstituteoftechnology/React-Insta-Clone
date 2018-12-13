import React from 'react'
import './Comments.css'

const Comments = props => {
    return (
        <div className="commentContainer">
            <input placeholder="Add a comment...">
            </input>
            <i class="fas fa-ellipsis-h"></i>
        </div>
    )
}

export default Comments;