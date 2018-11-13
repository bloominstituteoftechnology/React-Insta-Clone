import React from 'react';
import "./CommentSection.css"

function Comments(props){
    return(
        <div>
            <h3>{props.username}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Comments;