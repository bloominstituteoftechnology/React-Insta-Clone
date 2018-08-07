import React from 'react';

const Comment = props => {
    
    return(
        <div className="comments">
            <span>{props.username}</span>
            <span>{props.text}</span>
        
        </div>
    );    
};

export default Comment;