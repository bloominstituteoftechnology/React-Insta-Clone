import React from 'react'
const Post = (props) => {
  return (
    <div>
      <div>{props.post.username}</div>
      <div>{props.post.thumbnailURL}</div>
      <div>{props.post.imageURL}</div>
      <div>{props.post.likes}</div>
      <div>{props.post.timestamp}</div>
    </div>
  )
}

export default Post