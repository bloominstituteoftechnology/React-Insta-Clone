import React from "react";
import Comment from "./Comment";


const CommentSection = props => {
    return (
        <div>
            {props.comment.map(c => <Comment u={c.username} t={c.text}/>)}
        </div>
    )
}

export default CommentSection;