import React from 'react';




const CommentSection = (props) => {
 
    return (
      <div>{props.Comments.map(comment =>{
          return (
            <div>
                <strong><span>{comment.username}</span></strong> <span>{comment.text}</span>
            </div>
          )
      })}
      <div>{props.timestring}</div>
    
      <div>
          <h4>Add a comment...</h4>
      </div>
      </div>
    );
  
}

export default CommentSection ;