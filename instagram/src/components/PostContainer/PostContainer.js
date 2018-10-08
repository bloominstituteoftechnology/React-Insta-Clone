import React from 'react';
//import Post from './Post'

const PostContainer = (props) => {
  return (
    <div>
      {props.dummyData.map((postObj) => {
        return (
          <div>{props.postObj}</div>
        )
      })}
    </div>
  )
}

export default PostContainer;