import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './../PostContainer/PostContainer'

const CommentSection = (props,index) => {
  console.log(props);
  return (
   
    <div >
      {props.comm.map( comment => {
        console.log (comment)
        return( <div key = {comment.timestamp}><div>{comment.username}</div>
          <div>{comment.text}</div></div>
          )
      })}
    </div>
   
  );
}

export default CommentSection;
