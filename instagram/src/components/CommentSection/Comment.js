import React from 'react';

const Comment = props =>{
    return(
        <div className="comments-section">
            <div className="comments">
                <p className="user">{props.username}</p>
                <p className="comment">{props.comment}</p>
            </div>
        </div>
    );
}

export default Comment;