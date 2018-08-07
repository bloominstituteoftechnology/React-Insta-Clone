import React from "react";
import Comments from "./Comments"
import CommentInput from "./CommentInput"

const CommentSection = (props) => {
    console.log(props.comments)
    return (
        <div>
            {props.comments.map((comments, i) => {
                return <div>
                    <Comments key={i} comments={comments}/>
                    </div>
            })}
            <CommentInput/>
        </div>
    )
}

export default CommentSection;