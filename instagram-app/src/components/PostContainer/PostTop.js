import React from "react"

const PostTop = props => {
  return (
    <div className="post-top">
      <img 
      className="thumb-img"
      alt="user-image"
      src={props.thumbnail}
      />
      <div className="username">
      {props.username}
      </div>
    </div>
  )
}

export default PostTop;