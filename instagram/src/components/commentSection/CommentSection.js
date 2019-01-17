import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            
                <div className = 'comments'>
                    <p><b className = 'username'>{props.comment.username}</b>{props.comment.text}</p>
                </div>
    
        </div>
    );
};

export default CommentSection;