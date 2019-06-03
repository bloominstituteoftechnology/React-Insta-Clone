import React from "react"

const PostTop = props => {
  return (
    <div>
      <img 
      alt="user-image"
      src={props.thumbnail}
      />
      {props.username}
    </div>
  )
}

export default PostTop;