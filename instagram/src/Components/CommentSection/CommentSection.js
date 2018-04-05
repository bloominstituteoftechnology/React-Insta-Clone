import React from "react";
import dots from "./dots.svg"

const CommentSection = props => {
    console.log('other test', props.comments);
    return(
        <div>
           {props.comments.map(comment => (
               <div className = "comments">
                   <div className="comments__User">{comment.username} <span className="comments__Text">{comment.text}</span></div>
               </div>
           ))}
           <div className="comments__time">{props.time}</div>
           <div className = "comment__border"></div>
           <div className="comment__Input-container">
           <input className="comment__Input" type="text" placeholder="Add a comment...."/>
           <img src={dots} className="comment__dots"/>
           </div>
        </div>
    )
}

export default CommentSection