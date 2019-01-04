 import React from 'react';
 import Comment from '../CommentSection/Comment.js';
 

 const CommentSection = props => {
return (

  <div className="comment-section">
  <div className="likes">
      <p>{props.likes} likes</p>
  </div>

   {props.comments.map(comment => {
      return <Comment 
      username={comment.username} 
      text={comment.text}
      />
  }
  )
}
  </div>
)
 }
 export default CommentSection;