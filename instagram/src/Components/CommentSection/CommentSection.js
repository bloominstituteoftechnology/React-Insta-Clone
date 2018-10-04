import React from 'react'; 

const CommentSection = props => {
  return (
      <div>
        <div>
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <p>{props.likes}</p>
        <div>
          {props.comments.map( (comment, index) =>{
            return <p key={index}>
                     <span>{comment.username}</span>
                    {comment.text}</p>
            })}
        </div> 
        <p>{props.timestamp}</p>
      </div> 
  )
}


export default CommentSection;