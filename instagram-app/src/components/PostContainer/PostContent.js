import React from "react"

const PostContent = props => {
  return (
    <div>
        <img
        className="post-img" 
        alt="post"
        src={props.image}
        />
        <div id="post-icons">
          <i className="far fa-comment"></i>
          <i className="far fa-heart"></i>
        </div>
      <div className="post-likes">
        {props.likes} likes
      </div>
    </div>
  )
}

export default PostContent;