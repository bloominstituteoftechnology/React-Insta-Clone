import React from 'react';

const Comment = props =>{
    return(
        <div>
            <p className="user">{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    );
}

export default Comment;