
import React from 'react';
import './CommentSection.css';

const Comment = (props) => {

    if (!props.comment.length) {
        console.log('comments are rendering')
    }

    return (
        <div>
            <div className='comments'>
                <div className='user' >{props.comment.username}</div>
                <div className='text' >{props.comment.text}</div>
            </div>
        </div>
    )
}

export default Comment;