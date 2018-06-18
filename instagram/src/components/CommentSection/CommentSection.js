import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return(
        <div className='comment-container' >
        {props.comments.map(comment => (
            <Comment commentInfo={comment} />
        ))}
         
         <input
            type="text"
            placeholder="Add a comment..."
            value="Add a comment..."
            className="input"
        />
        </div>
    );
}

export default CommentSection;