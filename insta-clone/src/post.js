import React from 'react'
import CommentSection from "./commentSection"

const Post = props => {
  return (
    <div class="post">
      <div class="post-header">
        <img src={props.data.thumbnailUrl} alt="thumbnail picture"></img>
        <span>{props.data.username}</span>
      </div>
      <div class="post-body">
        <img src={props.data.imageUrl} alt="posted picture"></img>
        <CommentSection data={props.data.comments} />
      </div>
    </div>
  )
}

export default Post;
