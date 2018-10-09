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
    </div>
  )
}

export default CommentSection