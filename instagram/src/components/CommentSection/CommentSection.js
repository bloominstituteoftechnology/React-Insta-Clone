import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {

    return (
        <div>
           {props.comments.map(comment => {
               return(
                   <div>
                       <p>
                       <span className='username bold-txt'>{comment.username}</span> 
                       <span>{comment.text}</span>
                       </p>
                   </div>
               )
               
               } )} 
        </div>
    )
}

export default CommentSection;
