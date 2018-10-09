import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
  return(
      <div>
      {props.dummyData.map((commentObj) => {
        return (
          <div>
            <Comment comment={commentObj.comment}/>
          </div>
        )
      })} 
      </div>
  )
}

CommentSection.propTypes = {

}

export default CommentSection