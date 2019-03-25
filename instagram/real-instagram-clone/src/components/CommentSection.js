import React from 'react'
import Comment from './Comment'
import '../App.css'
const CommentSection =(props) =>{
    console.log(props.comments)
    return(
        <div className = "comment-section">
            {props.comment.map((comment,i) =>
               <Comment username ={comment.username} key = {i} text = {comment.text}/>
                
            
       
            )}
            </div>
)}
export default CommentSection