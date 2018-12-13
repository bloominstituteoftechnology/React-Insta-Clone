import React, { Component } from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (  
      <div className="post-container">{props.data.map(d => (

        <div key={d.username} className="post">

          <div className="user-info">
            <div className="profile-pic">
              <img src={d.thumbnailUrl} alt="" />
            </div>
            <div className="username">{d.username}</div>
          </div>

          <div className="user-post">
            <img src={d.imageUrl} alt="" />
          </div>

          <div className="user-comments">
            <CommentSection data={props.data} />
          </div>
        <div className="timestamp">{d.timestamp}</div>
        </div>
  ))}
      </div>
  
  )
  
}

export default PostContainer;