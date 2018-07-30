import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

//recieve props from app.js with comments then pass it to commentSection

const PostContainer = props => {
  return (
    <div className="post-container">
      post-container
      <CommentSection />
    </div>
  )
}

//check that data is the correct type

export default PostContainer;
