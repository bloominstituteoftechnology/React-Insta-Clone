import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="Post">
      <h2> {props.post.username} </h2>
      <img src={props.post.imageUrl} alt=""/>
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default PostContainer;