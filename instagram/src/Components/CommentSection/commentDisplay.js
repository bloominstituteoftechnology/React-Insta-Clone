import React from "react";

//comment component displays comments under each post
const Comment = (props) => {
    return (
        <div key={props.comment.username}>
            {props.comment.username} {props.comment.text}
        </div>
    )
}

export default Comment;