import React from 'react';
import './CommentSection.css';

const CommentSection = prop =>{
    return(
        <div>
            <div className="username_text">
                {prop.data.username} {prop.data.text}
            </div>
            <div>
                {prop.data.timestamp}
            </div>
        </div>
    )
}

export default CommentSection;