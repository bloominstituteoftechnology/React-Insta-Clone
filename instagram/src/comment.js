import React from "react";

function Comment(props) {
    return (
        <div className="comment">
            <p><b>{props.commentData.username}:</b> {props.commentData.text}</p>
        </div>
    );
}

export default Comment;
