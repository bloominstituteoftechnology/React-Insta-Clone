import React from 'react';
//import Comment from './Comment'

const CommentSection = (props) => {
  return (
    <div>


      <div>
      {props.dummyData.map((comment) => {
        return (
          <div>
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
          </div>
        )
      })} 
      </div>
    </div>
  )
}

export default CommentSection