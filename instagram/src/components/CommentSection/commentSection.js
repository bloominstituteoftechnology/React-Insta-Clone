import React from 'react';


const CommentSection = props => {
    return (
        <div className = 'commentSection'>
            {props.comment.map((comment)=>{
                return (
                    <div>
                        <h3>{comment.comments.username}</h3>
                        <h3>{comment.comments.text}</h3>
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
