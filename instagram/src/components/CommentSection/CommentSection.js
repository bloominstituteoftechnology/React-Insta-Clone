import React from 'react';
import './CommentSection.css'


const CommentSection = props => {
    return (
       <div> 
       {props.comments.map((comment) => 
            {return (
                <div className="comment-username">
                    {comment.username}
                    <span className="comment-text" >{comment.text}</span>
                </div>
           )})}
            <input className="comment-input" type="text" placeholder="Add a comment..."></input>
       </div>
    ) 
}



export default CommentSection;