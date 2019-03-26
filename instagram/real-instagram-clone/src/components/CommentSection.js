import React from 'react'
import Comment from './Comment'
import '../App.css'
const CommentSection =(props) =>{
    console.log(props.comments)
    return(
        <div>
        <div className = "comment-section">
            <div className=" comment-wrapper">
            {props.comment.map((comment,i) =>
               <Comment username ={comment.username} key = {i} text = {comment.text}/>
               
               
               
            
                
            
       
            )}
            </div>
            <div className ="input-wrapper">
            <div className ="input-field"><input  className = "comment-input"type="text" placeholder="Add Comment.."></input></div>
            <div> <button><i class="fas fa-ellipsis-h"></i></button></div>
            </div>
            
            </div>
            </div>
)}
export default CommentSection