import React from 'react';
import './CommentSection.css'




const CommentSection = props => {
    return (
       <div>
        {props.comments.map(comment => 
        <div className="comment">
            <h2 className="username">{comment.username}</h2>
            <p className="text">{comment.text}</p>
        </div>
    
    )}

       </div>
    )
}







export default CommentSection;