import React from "react";

//comment component displays comments under each post
const Comment = (props) => {
    return (
        <>
            {props.comment.username} {props.comment.text}
        </>
    )
}

export default Comment;