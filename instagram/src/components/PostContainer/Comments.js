import React from 'react';

function Comments(props) {
    
    return <div className="comments">
        <div><span className="commentUserName">{props.comments.username}</span>  {props.comments.text}</div>
    </div>
}

export default Comments;