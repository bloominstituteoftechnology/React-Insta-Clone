import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {

  return(
    <div>
      {props.dummyData.map((postObj) => {
        return (
          <div>
            <Comment 
              comment={postObj.comments}/>
          </div>
        )
      })}
    </div>
  )
}

export default CommentSection