import React from 'react'
import './Post.css'
import Comment from '../CommentSection/Comment.js'

const Post = (props) => {
  return (
    <div className="Post">
      <p>Post</p>
      {props.post.comments.map( item => {
        return (
          <Comment key={item.text} comment={item} />
        )
      })}
    </div>
  )
}

export default Post
