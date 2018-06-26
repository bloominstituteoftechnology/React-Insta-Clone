import React from 'react';

const CommentSection = props => {
    return (
        <div className='comments-section'>
            <span>{props.comment.username}</span> 
            <span>{props.comment.text}</span>
        </div>
    );
}
 
export default CommentSection;