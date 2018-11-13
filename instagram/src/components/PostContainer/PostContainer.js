import React from 'react';
import './PostContainer.css';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="post--container">
      <PostHeader />
      <div className="post--img">
        <img src="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg" alt=""/>
      </div>
      <CommentSection />
    </div>
  );
}

export default PostContainer;