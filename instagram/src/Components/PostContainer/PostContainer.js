import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  return (
      <div className="post-container">
          <CommentSection />
          <p>Container Area</p> 
      </div> 
  )
}


export default PostContainer; 