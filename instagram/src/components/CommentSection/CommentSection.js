import React from 'react';
import ReactDOM from 'react-dom';
const CommentSection = (props,index) => {
  console.log(props);
  return (
    <div >
      {props.comm.map( comment => {
        console.log (comment)
        return( <div key = {index}><div>{comment.comments.username}</div>
          <div>{comment.comments.text}</div></div>
          )
      })}
    </div>
  );
}

export default CommentSection;
