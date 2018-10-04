import React from 'react'; 

const CommentSection = props => {
  return (
    <div className="commentContainer">
      <div className="likeTab">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
      </div>
      <p className="userLikes">{props.likes} likes</p>
      <div>
        {props.comments.map( (comment, index) =>{
          return <p className="userComments" key={index}>
                   <span>{comment.username}</span>
                   {comment.text}</p>  
        })}
      </div> 
      <p className="timeStamp">{props.timestamp}</p>
      <hr/> 
      <div className="pageFooter">
        <p>Add a Comment...</p>
        <p id="footerTab">...</p>  
      </div> 
    </div> 
  )
}


export default CommentSection;