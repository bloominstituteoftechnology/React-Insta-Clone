import React from 'react';
import "./CommentSection.css"

function Comments(props){
    return(
        <div className="comment-area">
            <h3 className="commenter">{props.username}</h3>
            <p className="comment"> {props.text}</p>
        </div>
    );
}

export default Comments;