import React from 'react';
import './commentsection.css';

const CommentLoad = props => {
    return(
        <div className={"CommentandUsernames"}>
            <p className={"comments"}>{props.comments.text}</p>

            <h2 classname={"commentUsernames"}>{props.commentusers.username}</h2>
        </div>
    )
}


export default CommentLoad