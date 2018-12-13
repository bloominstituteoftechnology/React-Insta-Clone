import React from 'react';
import './CommentSection.css';

const CommentSection = prop =>{
    return(
        <div>
            {prop.data.username} {prop.data.text}
        </div>
    )
}

export default CommentSection;