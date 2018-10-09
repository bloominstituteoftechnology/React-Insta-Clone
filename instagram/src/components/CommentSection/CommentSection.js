import React from 'react';
import styles from './CommentSection.css'

const CommentSection = ({comments}) => (
    <div className='comments-container'>
        {comments.map(comment => {
            return <div className='comment'>
                        <span className='user'>{comment.username}&nbsp;</span>
                        {comment.text}
                    </div>
        })}
    </div>
)

export default CommentSection;