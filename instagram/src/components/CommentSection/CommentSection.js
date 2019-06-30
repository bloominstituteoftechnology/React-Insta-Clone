import React from 'react';
import './comment-section.css';


const CommentSection = props => {

    console.log("from comments", props);

    return(
        <div className="comment-container">
         {props.comments.map(c => (
             <div className="each-comment"><p className="comment-username">{c.username}</p><p className="comment-text">{c.text}</p></div>
         ))}
        </div>
    )
}





export default CommentSection;