import React from 'react';
import './Post.css'
import CommentSection from '../CommentSection/CommentSectionContainer'


const Post = props => {
    return (
      <div className = "post-container">
        <div className = "post">
          
          <div className = "post-header">
            <img className = "thumbnail" src = {props.post.thumbnailUrl} />
            <h3 className = "username">  {props.post.username} </h3>
          </div>
          
          <div>
            <img className = "post-image"src={props.post.imageUrl} />
          </div>
          
          <div className = "post-footer">
            <p> {props.post.likes} </p>
            <p> {props.post.timestamp} </p>
          </div>
        </div>

        <div className = "comments">
          <CommentSection comments = {props.post.comments} />
        </div>

      </div>
    )
  }

export default Post