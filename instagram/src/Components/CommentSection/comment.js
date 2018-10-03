import React from "react";
import Comment from "./commentDisplay";

//comments component maps over the comment array and passes that data to comment component
const Comments = (props) => {
    return (
        <>
            {props.comment.map(comment => {
                return (
                <div className="comment-text" key={comment.text}>
                    <Comment comment={comment}/>
                </div>
                )
            })}
        </>
    )
}

export default Comments;