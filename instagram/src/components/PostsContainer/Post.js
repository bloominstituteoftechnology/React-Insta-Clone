import React from 'react'

const Post = props => {
  return (
    <div className="post">
      <img src={props.post.thumbnailUrl} alt="avatar" />
      <p>{props.post.username}</p>
      <img src={props.post.imageUrl} alt="main" />
      <p>{props.post.likes}</p>
      <p>{props.post.timestamp}</p>
    </div>
  )
}

export default Post