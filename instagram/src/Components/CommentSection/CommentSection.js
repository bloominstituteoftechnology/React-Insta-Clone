import React from "react";

const CommentSection = props => {
    console.log('other test', props.comments);
    return(
        <div>
           {props.comments.map(comment => (
               <div>
                   <div>{comment.username}</div>
                   <div>{comment.text}</div>
               </div>
           ))}
        </div>
    )
}

export default CommentSection