import React from 'react'
import './Post.css'
import Comment from '../CommentSection/Comment.js'

const Post = (props) => {
  return (
    <div className="Post">
      <p>Post</p>
      {props.post.comments.map( item => {
        return (
          <Comment comment={item.comments} />
        )
      })}
    </div>
  )
}

export default Post
