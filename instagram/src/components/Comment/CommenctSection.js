import React from 'react'
import Comment from './Comment'

const CommentSection = (props) => {
    return (
        <div className="CommentSection">
            {props.comments.map(element => {
                return (
                    <Comment key={element.text} comment={element} />
                )
            })}
            <input type="text" placeholder="Add a Comment.." />

        </div>
    )
}

export default CommentSection