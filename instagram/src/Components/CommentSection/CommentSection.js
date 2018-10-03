import React from 'react'; 

const CommentSection = props => {
  return (
      <div>
        <p>{props.username}</p>
        <img src={props.imageUrl}></img> 
      </div> 
  )
}


export default CommentSection;