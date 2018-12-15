import React from "react";

function Comment(props) {
    return (
        <div className="comment">
            <p>{props.commentData.text}</p>
        </div>
    );
}

export default Comment;
