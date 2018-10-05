import React from 'react';
import './commentsection.css';

const CommentLoad = props => {
    return(
        <div>
            <div className={"Comments"}>
                <p className={"comments"}>{props.comments.texts}</p>
            </div>>
            <div className={"Usernames"}>
                <h2 className={"commentUsernames"}>{props.commentusers.username}</h2>
            </div>
        </div>
    )
}


export default CommentLoad