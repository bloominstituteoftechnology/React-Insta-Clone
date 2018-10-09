import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {

    return (
        <div>
        <div className="comment-cont">
           {props.comments.map(comment => {
               return(
                   <div >
                       <p>
                       <span className='username bold-txt'>{comment.username}</span> 
                       <span>{comment.text}</span>
                       </p>
                   </div>
                   
               )
               
               } )}

            {props.stateComments.map(comment => {
                return (
                    <div id={comment.id}>
                       <p>
                       <span className='username bold-txt'>{comment.username}</span> 
                       <span>{comment.text}</span>
                       </p>
                   </div>
                )
            })} 
        </div>
        <form onSubmit={props.addNewComment}>
        <input className="comment-input" 
               type='text' 
               placeholder='Add a comment...'
               value={props.commentInput.text}
               onChange={props.inputHandler}/>
        </form>
        </div>
    )
}

export default CommentSection;
