import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {

  return(
    <div>
      {props.comments.map((commentObj) => {
        return (
          <div>
            <Comment 
              comment={commentObj}/>
          </div>
        )
      })}
      <input
        type="text"
        name="new comment"
        placeholder="enter new comment..."
      />

    </div>
  )
}


export default CommentSection