import React from "react";

//comment component displays comments under each post
const Comment = (props) => {
    return (
        <>  
            <span className="username">{props.comment.username}</span>
            {props.comment.text}
        </>
    )
}

export default Comment;