import React from 'react';

import './commentsection.css';

const Comment = props => {
    return (
        <div className="comment">
            <div className="userId">{props.comment.username} </div>
            <div className="userComment">{props.comment.text} </div>
            
        </div>
    );
};

export default Comment;