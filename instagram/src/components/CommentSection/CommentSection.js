import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
  return(
    <div>
      {props.dummyData.map((postObj) => {
        return (
          <div>
            <Comment
              dummyData={props.dummyData} 
              comments={postObj.comments} />
          </div>
        )
      })}
    </div>
  )
}

CommentSection.propTypes = {

}

export default CommentSection