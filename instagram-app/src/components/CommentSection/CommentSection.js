import React from 'react'

const CommentSection = (props) => {
    return (
        props.comment.map( (feedBack) => (
            <div>
                <h3>{feedBack.username}</h3>
                <p>{feedBack.text}</p>
            </div>
        ))
        
    )
}

export default CommentSection