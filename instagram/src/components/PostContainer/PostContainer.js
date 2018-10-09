import React from 'react';
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
  return (
    <div>
      {props.dummyData.map((postObj) => {
        return (
          <div>
            <Post post={postObj} />
            <CommentSection comment={postObj.comments}/>
          </div>
        )
      })}
    </div>
  )
  
}

export default PostContainer;