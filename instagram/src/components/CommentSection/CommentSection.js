import React from 'react';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className = 'comment-section-div'>
            <h5>{ props.comment.username }</h5>
            <p>{ props.comment.text }</p>
        </div>
    );
}

export default CommentSection;
