import React from 'react';

const CommentSection = props => {
    return <div>{props.comments.map(comments =>(
        <div className='comments'>
        <span className='username-comments'>{comments.username}</span> <span className='comment-text'>{comments.text}</span>
         </div>
    ))}
</div>
};

export default CommentSection;