import React from 'react'

import { Input } from 'reactstrap'

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
            <Input placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection