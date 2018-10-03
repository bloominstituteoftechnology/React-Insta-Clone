import React from "react";
import Comment from "./commentDisplay";

//comments component maps over the comment array and passes that data to comment component
const Comments = (props) => {
    return (
        <div>
            {props.comment.map(comment => {
                return (
                <div key={comment.text}>
                    <Comment comment={comment}/>
                </div>
                )
            })}
        </div>
    )
}

export default Comments;