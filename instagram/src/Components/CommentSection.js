import React from 'react';


const CommentSection = props => {
  console.log(props.comments);
  return(
    <div className='comment'>
      <h5>{props.comments.map(comment => {
        return (
          <div>
            <span>{comment.username}</span>
            <p>{comment.text}</p>
          </div>
          
        )
      })}</h5>
    </div>
  )
}

export default CommentSection;