import React from 'react'

const Post = props => {
  return (
    <div className="post">
      <img src={props.thumbnailUrl} alt="avatar" />
      <p>{props.username}</p>
      <img src={props.imageUrl} alt="main" />
      <p>{props.likes}</p>
      <p>{props.timestamp}</p>
    </div>
  )
}

export default Post