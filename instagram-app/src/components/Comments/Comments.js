import React from 'react'
import './Comments.css'
import Comment from '../Comment/Comment'

const Comments = (props) => {
    return (
        <div className="comments--width">
            <Comment comment={props.comments} />
        </div>
    )
}

export default Comments


