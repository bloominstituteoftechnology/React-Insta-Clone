import React from 'react'
import './Post.css'
import Comments from '../CommentSection/Comments'

const Post = (props) => {
  return (
    <React.Fragment>
      <p>post by {props.post.username}</p>
      <Comments className="Comments" comments={props.post.comments} />
    </React.Fragment>
  )
}

export default Post
