import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = props => {
    return(
        <div className='comment-text' >
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