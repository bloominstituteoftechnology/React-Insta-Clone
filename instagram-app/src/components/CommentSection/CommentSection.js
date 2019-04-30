import React from 'react'
import "./CommentSection.css"
import Comment from './Comment';

//username comment

// comments: [
//     {
//       username: "playhearthstone",
//       text: "Love this shot!"
//     },
//     {
//       username: "hello",
//       text: "Love this sure!"
//     }
    

const CommentSection = props => {
    return (
        <div className= "comment-section">
          {props.comments.map( (eleComment, index) =>(
              < Comment 
                key={index} // might need to define the key/id somewhere else later
                comment={eleComment}
                />
          ))}

        </div>

    )
}


export default CommentSection










// const Comment = props => {

//     return (
//       <div className='comment'>
//       <p> <strong>{props.comment.username}</strong> {props.comment.text} </p> 
//       </div>
  
//       );
  
//   }