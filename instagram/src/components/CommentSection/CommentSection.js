import React from 'react';
import './CommentSectionStyles.css';

// const addNewComment =(event,index)=>{
//     if(event.key === "Enter"){
//         event.stopPropagation();
//         console.log("Enter was clicked")
//     }
// }

//Make a class component
// const CommentSection = props =>{
//     return(
//         <div>
//         {props.comments.map((comment,index) => {
//             return(
//                 <p key={index}><span className="comment-username">{comment.username}</span> {comment.text}</p>
//             )
//         })}
//         <input onKeyPress={addNewComment} className="comment-form" type="text" placeholder="Add a comment" />
//         </div>
//     )
// }

export default CommentSection;