import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
  console.log('Comment Section props are:',{props});
  const comments=props.comments;
  console.log('All Comments are:',{comments});
  
  console.log('All Comments are: {comments[0]}');
  return (<div className="CommentContainer">
    {comments.map((comment, index) => (
          <div className="singlecomment" key={index} comment={comment}><p>'{comment.username}: {comment.text}'</p></div>))}
    </div>
  );

}  


export default CommentSection;