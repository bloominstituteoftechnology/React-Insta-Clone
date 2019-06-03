import React from "react"

const PostContent = props => {
  return (
    <div>
        <img 
        alt="post-photo"
        src={props.image}
        />
      <div>
        {props.likes} likes
      </div>
    </div>
  )
}

export default PostContent;