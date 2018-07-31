import React from 'react';
import './CommentSection.css'
const CommentSection = props => {
    return ( <div>
    {props.comments.map(comment => {
        return (
        <div className="commentContent"> <p> <span className="commentUser">{ comment.username } </span>{ comment.text } </p> </div>
        )
    }
    
    ) } 
        </div> );
}
 
export default CommentSection;