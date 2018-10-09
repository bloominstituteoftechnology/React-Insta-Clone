import React from 'react';

const Comment = props =>{
    return(
        <div>
            <p className="user">{props.username}</p>
            <p>{props.comment}</p>
        </div>
    );
}

export default Comment;