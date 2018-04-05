import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    console.log(props)
    return (
        <div>
            {props.commentData.username}
            <div>
                {props.commentData.text}
            </div>
        </div>
    )
}

export default CommentSection;