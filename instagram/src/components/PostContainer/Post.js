import React from 'react';

const Post = props => {
    return (
      <div className = "post-container">
        <div className = "post">
          
          <div className = "post-header">
            <img src = {props.post.thumbnailUrl} />
            <h3> {props.post.username} </h3>
          </div>
          
          <div className = "post-image">
            <img src={props.post.imageUrl} />
          </div>
          
          <div className = "post-footer">
            <p> {props.post.likes} </p>
            <p> {props.post.timestamp} </p>
          </div>
        </div>
      </div>
    )
  }

export default Post