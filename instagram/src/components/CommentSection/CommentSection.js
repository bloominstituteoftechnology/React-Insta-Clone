import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    console.log(props)
    return (
        <div className="comment-section">
            <b style={{ marginRight: '1%' }}>
                {props.commentData.username}
            </b>
            {props.commentData.text}
        </div>
    )
}

export default CommentSection;