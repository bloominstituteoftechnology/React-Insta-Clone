import React from 'react';

const Comment = props =>{
    return(
        <div className="comment-class">
            <h2 className="comment-username">{props.comment.username}</h2>{' '}
            <h2 className="comment-comment">    {props.comment.text}</h2>
        </div>
        
    );
}

export default Comment;