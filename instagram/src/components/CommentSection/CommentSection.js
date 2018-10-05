import React from 'react';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            <div className='comments'>
                <h4>{props.comment.username}</h4>
               <p>{props.comment.text}</p>
            </div>
        </div>
    )
}

export default CommentSection;