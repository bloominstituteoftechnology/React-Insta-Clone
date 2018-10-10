import React from 'react';

const Comment = props => {
    return(
        <div className="comments">
            <div className="commentsText"> <p><span>{props.comments.username}</span>{props.comments.text}</p></div>
        </div>
    )
}

export default Comment;