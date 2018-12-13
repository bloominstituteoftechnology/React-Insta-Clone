import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = props => {
  console.dir(props);
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
            <CommentSection comments={d.comments} likes={d.likes} timestamp={d.timestamp}/>
          </div>
        </div>
  ))}
      </div>
  
  )
  
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    
  })
}

export default PostContainer;