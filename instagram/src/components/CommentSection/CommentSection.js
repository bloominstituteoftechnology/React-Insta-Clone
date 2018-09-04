import React from 'react';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className = 'comment-section-div'>
            <h5>{ props.comment.username }</h5>
            <p>{ props.comment.text }<span onClick = { props.deleteComment(props.index) } className = 'delete-btn'>X</span></p>
        </div>
    );
}

export default CommentSection;
