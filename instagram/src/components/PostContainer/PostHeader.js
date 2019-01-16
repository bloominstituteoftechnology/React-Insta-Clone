import React from 'react'
import './PostContainer.css'

 const PostHeader = (props) => {
  return (
    <div>
      <div className="thumb-name">
            <img className="thumb-img"
              src={props.thumbnailUrl}
            />
            <div className="username">{props.username}</div>
          </div>
    </div>
  )
}

export default PostHeader
