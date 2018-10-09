import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
  return (
    <div className="post">
      <p> {props.post.username} </p>
      <img src={props.post.imageUrl} alt=""/>
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default PostContainer;