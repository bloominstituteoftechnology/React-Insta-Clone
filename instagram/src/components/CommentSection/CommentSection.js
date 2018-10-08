import React from 'react';
//import Comment from './Comment'

const CommentSection = (props) => {
  return (
    <div>
      <input 
        type="text"
        name="comments"
        placeholder="add new comment"
      />

      <div>
      {props.dummyData.map((comment) => {
        return (
          <div>
            <p key={comment.username}>{props.comment.username}</p>
            <p key={comment.text}>{props.comment.text}</p>
          </div>
        )
      })} 
      </div>
    </div>
  )
}

export default CommentSection