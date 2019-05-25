import React from 'react'

const CommentSection = props => {
    console.log(props.comments)
    return (
        <div>
            {props.comments.map(comments => (
                <div key={comments.text} className='comments'>
                    <p>
                        <strong>{comments.username}</strong> {comments.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CommentSection