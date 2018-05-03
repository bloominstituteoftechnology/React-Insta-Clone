import React from 'react';

const Comment = props => {
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



export default Comment;