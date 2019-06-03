import React from "react"

const PostTop = props => {
  return (
    <div>
      <img 
      alt="post-top"
      src={props.thumbnailUrl}
      />
      {props.username}
    </div>
  )
}

export default PostTop;