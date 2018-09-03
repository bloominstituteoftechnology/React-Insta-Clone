import React from 'react'
import './Comments.css'
import Comment from './Comment'

const Comments = (props) => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <Comment 
            className="Comment"
            key={comment.text}
            comment={comment} 
          />
        )
      })}
      <input placeholder="Add a comment" />
    </div>
  )
}

export default Comments
