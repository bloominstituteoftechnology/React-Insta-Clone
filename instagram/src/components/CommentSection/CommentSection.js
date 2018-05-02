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
                        {/* <div className="comment-username">{comment.username}</div>
                        <span className="comment-text">{comment.text}</span> */}
                </div>
           )})}
       </div>
    ) 
}



export default CommentSection;