import React from 'react';
import './commentSection.css';


const CommentSection = props => {
    return (
        <div className = 'commentSection'>
            {props.item.comments.map((comment, index)=>{
                return (
                    <div className = 'comment'key = {index}>
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    </div>
                )
            })}


            <form className = 'form'>
                    <input type="text" placeholder="Add a comment..." />
            </form>  
 
        </div> 
        
    )
}









 
export default CommentSection;
