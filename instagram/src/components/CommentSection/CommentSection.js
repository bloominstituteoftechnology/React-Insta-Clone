import React from 'react';
import './CommentSection.css';
import {Username} from '../PostContainer/PostContainer.js';

const CommentSection = (props) => {

    return (
        <div>
        <div className="comment-cont">
           {props.comments.map(comment => {
               return(
                   <div >
                       <p>
                       <Username comment >{comment.username}</Username> 
                       <span>{comment.text}</span>
                       </p>
                   </div>
                   
               )
               
               } )}

            {props.stateComments.map(comment => {
                return (
                    <div id={comment.id}>
                       <p>
                       <Username comment >{comment.username}</Username> 
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
