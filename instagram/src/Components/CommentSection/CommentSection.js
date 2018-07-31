import React from "react";
import NewComment from './Comment'
import "./CommentSection.css"

const CommentSection = props => {
    return (
        <div className = "commentSection">
           {props.comments.map((comment, index) => {
              return <NewComment key = {index} commentUser = {comment.username} commentText = {comment.text}/>
            })}
            {console.log(props.comments)}
            <p className = "timestamp">{props.timeStamp}</p>
            <div className = "addComment">
                <p>Add a comment...</p>
            </div>
        </div>
    )

}

export default CommentSection; 
